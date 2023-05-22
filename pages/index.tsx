import styled from 'styled-components'
import { ShortLinkForm } from '../src/components/ShortLinkForm'
import { ShortLinkList } from '../src/components/ShortLinkList'
import { useLink } from '../src/hooks/useLink'
import { parseCookies } from 'nookies'
import { services } from '../src/services'
import { useEffect } from 'react'

export default function Home({userInfo}) {
  const {handleDeleteShortenLink,userInfoClient, setUserInfoClient,link, setLink,isLoadingLink,linkErrorMessage,  handleLinkCreation} = useLink()
  const {setToken} = useLink()
  useEffect(()=>{
    console.log(userInfo)
    setUserInfoClient(userInfo)
    const {token} = parseCookies("token")
    setToken(token)
  }, [])
  return <HomeContainer>
    <ShortLinkForm isLoadingLink={isLoadingLink} linkErrorMessage={linkErrorMessage} link={link} setLink={setLink}  handleLinkCreation={handleLinkCreation}/>
    <ShortLinkList handleDeleteShortenLink={handleDeleteShortenLink} userLinkList={userInfoClient?.shortenedUrls} />
  </HomeContainer>
}
export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/ranking',
        permanent: false
      }
    }
  }
  const response = await services.getUserURL(token)
  const userInfo = await response.json()
  return {
    props: {
      userInfo
    }

  }
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:100px;
  form {
    margin-top: calc(5% + 100px);
    @media (max-width:450px){
      margin-top: calc(5% + 50px);
    }
  }
`