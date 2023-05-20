import styled from "styled-components"
import Image from "next/image"
import trofeu from "../assets/trofeu.jpg"
export function Ranking({rankingData=[]}) {
    return <RankingContainer>
        <TitleContainer>
        <Image src={trofeu}  alt="troféu" width={56} height={50} />        
        <Title>Ranking</Title>   
       
        </TitleContainer>
        <ScoreContainer>
        <ListContainer >
        {rankingData.map(item=>{
            return <ListItem key={item.id} type="1">{item.name} - {item.linksCount} links - {Number(item.visitCount).toLocaleString('pt-BR')} visualizações</ListItem>
        })}
        </ListContainer>  
        </ScoreContainer>
    </RankingContainer>
}

const Title = styled.h2`
font-weight: 700;
font-size: 36px;
line-height: 45px;
color: black;
margin-left: 10px;
`
const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content:center;
`
const ListContainer = styled.ol`
height: 80%;
width:100%;
`
const ListItem = styled.li`
font-weight: 500;
font-size: 22px;
line-height: 28px;
`

const ScoreContainer = styled.div`
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 24px 24px 0px 0px;
margin-top: 57px;
height:fit-content;
padding: 20px 40px;
`
const RankingContainer = styled.div`
    width: 100%;
    height: 78px;
    max-width: 769px;
    margin: 80px auto 0 auto;
`