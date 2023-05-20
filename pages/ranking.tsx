import styled from 'styled-components'
import { Header } from '../src/components/Header'
import { Ranking } from '../src/components/Ranking'
import services from '../src/services'
const HomeContainer = styled.div`
`

export default function Home({rankingData=[]}) {
  return <HomeContainer>
    <Ranking rankingData={rankingData}/>
  </HomeContainer>
}


export async function getServerSideProps(){
  const rankingData = await services.getRanking()
  console.log(rankingData)
  return { props: {
      rankingData
  }}
} 