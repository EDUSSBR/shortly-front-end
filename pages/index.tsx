import styled from 'styled-components'
import { Ranking } from '../src/components/Ranking'
import { ShortLinkForm } from '../src/components/ShortLinkForm'
import { ShortLinkList } from '../src/components/ShortLinkList'

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

export default function Home() {
  return <HomeContainer>
      {false && <Ranking />}
      <ShortLinkForm />
      <ShortLinkList />
  </HomeContainer>
}
