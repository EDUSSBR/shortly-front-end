import { createContext, useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { services } from '../services'
import { useRouter } from 'next/router';
import { setCookie, destroyCookie } from 'nookies';
const AccountContext = createContext()
// {email, password, setEmail, setPassword, handleLogin, isLoadingLogin=false, LoginError}
export function AccountContextProvider({ children }) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [createAccountError, setCreateAccoountError] = useState([]);
    const [loginError, setLoginError] = useState([]);
    const router = useRouter()
    const loginMutation = useMutation(() => services.makeLogin(email, password),
        {
            onSuccess: async (data) => {

                if (data?.status !== 200) {
                    throw ["Ocorreu um erro, verifique as informações e tente novamente."]
                }
                const { token } = await data.json()
                console.log(token)
                setCookie(null, 'token', token, {
                    maxAge: 3600,   
                    secure: true, 
                    path: '/', 
                  })
                router.push('/')
            },
            onError: (error) => {
                setLoginError(error);
            },
            onSettled: () => {
                setEmail("")
                setPassword("")
            }
        }
    );
    const createAccountMutation = useMutation(() => services.createAccount(name, email, password, confirmedPassword),
        {
            onSuccess: async (data) => {

                if (data?.status === 201) {
                    router.push('/login')
                } else if (data?.status === 409) {
                    throw ["Já existe um usuário cadastrado com esse e-mail!"]
                } else if (data?.status === 422) {
                    throw ["Alguma informação está incorreta, confira e tente novamente."]
                }
            },
            onError: (error) => {
                setCreateAccoountError(error);
            },
            onSettled: () => {
                setName("")
                setEmail("")
                setPassword("")
                setConfirmedPassword("")
            }
        }
    );

    async function handleLogin(e) {
        try {
            setLoginError(() => []);
            e.preventDefault();
            await loginMutation.mutateAsync();
        } catch (e) {
            console.log(e)
        }
    }
    async function handleCreateAccount(e) {
        try {
            setCreateAccoountError(() => []);
            e.preventDefault();
            if (password !== confirmedPassword) {
                setCreateAccoountError(["Passwords não possuem valores iguais"]);
                return
            }
            await createAccountMutation.mutateAsync();
        } catch (e) {
            console.log(e)
        }
    }
    return <AccountContext.Provider value={{ handleLogin, email, name, password, confirmedPassword, setEmail, setName, setPassword, setConfirmedPassword, handleCreateAccount, isLoadingAccountCreation: createAccountMutation.isLoading, isLoadingLogin: loginMutation.isLoading, createAccountError, loginError }}>
        {children}
    </AccountContext.Provider>
}

export function useAccount() {
    const ctx = useContext(AccountContext)
    return ctx
}