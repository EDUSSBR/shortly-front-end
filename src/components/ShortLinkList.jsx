import styled from "styled-components";
import {FaTrashAlt} from "react-icons/fa"

export function ShortLinkList({userLinkList, handleDeleteShortenLink}){
    return <ListContainer>
        {userLinkList?.map(item=><ListItemContainer onClick={()=>{
            navigator.clipboard.writeText(`https://shortly-front-end-eight.vercel.app/shortUrl/${item.shortUrl}`)
            .then(() => {
              console.log('ID copiado para a área de transferência:', item.shortUrl);
            })
        }} key={item.id}>
            <InfoContainer>
            <p>{item.url}</p>
            <p>{item.shortUrl}</p>
            <p>Quantidade de visitantes: {item.visitCount}</p>
            </InfoContainer>
            <IconContainer>
                <FaTrashAlt onClick={()=>handleDeleteShortenLink(item.id)}/>
            </IconContainer>
        </ListItemContainer>
        )}
    </ListContainer>
}

const ListItemContainer = styled.li`
    cursor:pointer;
    display:flex;
    width:100%;
    /* margin: 0 auto; */
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    height:62px;
    margin-top:3.8%;
    @media (max-width: 680px){
        height:100px;
        
    }
    `
const InfoContainer = styled.div`
    color:white;
    font-size: 14px;
    line-height: 18px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    background-color:#78B159;
    
    border-radius: 12px 0 0 12px;
    padding-left: 2.5%;
    padding-right: 10.6%;
    @media (max-width: 680px){
        flex-direction:column;
        justify-content: space-between;
        align-items:center;
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        padding-right: 2.5%;
    }
    @media (max-width: 348px){
        font-size: 12px;
    }
    `
const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:11%;
    color:red;
    svg{
        width:22px;
        height:26px;
        @media (max-width: 450px){
            width:19px;
            height:23px;

        }
    }
    @media (max-width: 680px){
        width:50%;
    }
    `
export const ListContainer = styled.ul`
   margin-top: 60px;
   display:flex;
   flex-direction: column;
   align-items:center;
   width:100%;
   height:100%;
   max-width:1200px;
`