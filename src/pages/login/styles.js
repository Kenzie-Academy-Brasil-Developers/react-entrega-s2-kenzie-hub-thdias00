import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
    > h1{
        text-align: center;
        color: var(--black);
        padding: 20px 0;
        font-size: 30px;
        >span{
            background: var(--violet);
            color: var(--white);
        }
    }
`;


export const Content = styled.div`
border: 2px solid var(--grayClean);
background: var(--white);
box-sizing: border-box;
border-radius: 5px;
width: 30%;
@media (max-width: 700px){
    width: 70%;
}
    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        >div{
            width: 80%;
            padding: 20px 0;
            >label{
                top: inherit;
            }
        }
        >p{
            width: 70%;
            text-align: center;
            padding: 20px 0;
            color: var(--gray);
            >span{
                color: black;
            }
        }
    }
`;