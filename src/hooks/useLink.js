import { createContext, useContext, useEffect, useState } from 'react'
import { destroyCookie, parseCookies } from 'nookies';
import { services } from '../services';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
const LinkContext = createContext()
export function LinkContextProvider({ children }) {
    const [userInfoClient, setUserInfoClient] = useState({})
    const [token, setToken] = useState(() => parseCookies().token)
    const [link, setLink] = useState("")
    const [linkErrorMessage, setLinkErrorMessage] = useState("")
    const [deleteErrorMessage, setDeleteErrorMessage] = useState("")
    const [idForDeletion, setIdForDeletion] = useState("")
    const router = useRouter()
    console.log(token)
    useEffect(() => {
        const tokenFromCookie = parseCookies()
        if (!tokenFromCookie) {
            setUserInfoClient({})
        }
    }, [token])
    const createShortenLinkMutation = useMutation(() => services.createShortenLink(token, link),
        {
            onSuccess: async (data) => {
                if (data?.status === 201) {
                    const newUserInfo = await services.getUserURL(token)
                    const newUserInfoJson = await newUserInfo.json()
                    setUserInfoClient(newUserInfoJson)
                } else if (data?.status === 422) {
                    throw "Há algum problema com seu link, use um formato válido"
                } else if (data?.status === 500) {
                    throw "Houve um erro, tente novamente."
                }
            },
            onError: (error) => {
                setLinkErrorMessage(error);
            },
            onSettled: () => {
                setLink("")
            }
        }
    );
    const deleteShortenLinkMutation = useMutation(() => services.deleteShortenLinkByID(idForDeletion, token),
        {
            onSuccess: async (data) => {
                if (data?.status === 204) {
                    const newUserInfo = await services.getUserURL(token)
                    const newUserInfoJson = await newUserInfo.json()
                    setUserInfoClient(newUserInfoJson)
                } else {
                    throw "Houve um erro, tente novamente."
                }
            },
            onError: (error) => {
                setDeleteErrorMessage(error);
            },
            onSettled: () => {
                setLink("")
            }
        }
    );

    async function handleLinkCreation(e) {
        e.preventDefault()
        setLinkErrorMessage("")
        try {
            if (!(/^(?:https?:\/\/)?(w{3}\.)?[\w_-]+((\.\w{2,}){1,2})(\/([\w\._-]+\/?)*(\?[\w_-]+=[^\?\/&]*(\&[\w_-]+=[^\?\/&]*)*)?)?$/.test(link))) {
                setLinkErrorMessage("Há algum problema com seu link, use um formato válido")
                return
            }
            await createShortenLinkMutation.mutateAsync()
            setLinkErrorMessage("")
        } catch (e) {
            setLinkErrorMessage("Houve um erro, tente novamente.")
            console.log(e)
        }
    }
    async function handleDeleteShortenLink(id) {
        setDeleteErrorMessage("")
        console.log('entrou')
        setIdForDeletion(id)
        try {
            await deleteShortenLinkMutation.mutateAsync()
            setDeleteErrorMessage("")
        } catch (e) {
            setDeleteErrorMessage("Há algum problema com seu link, use um formato válido")
            console.log(e)
        }

    }
    async function handleLogout() {
        destroyCookie('token')
        setUserInfoClient({})
        setToken("")
        setLink("")
        setLinkErrorMessage("")
        router.push('/ranking')
    }
    return <LinkContext.Provider value={{ link, handleLogout, handleDeleteShortenLink, linkErrorMessage, setLink, token, handleLinkCreation, userInfoClient, setUserInfoClient, setToken, isLoadingLink: createShortenLinkMutation.isLoading }}>
        {children}
    </LinkContext.Provider>
}

export function useLink() {
    const ctx = useContext(LinkContext)
    return ctx
}