import styled from 'styled-components'
import { Header } from '../src/components/Header'
import { Ranking } from '../src/components/Ranking'

const HomeContainer = styled.div`
  /* color: ${({ theme }) => theme.colors.primary}; */
`

export default function Home() {
  return <HomeContainer>
    <Ranking />
  </HomeContainer>
}
