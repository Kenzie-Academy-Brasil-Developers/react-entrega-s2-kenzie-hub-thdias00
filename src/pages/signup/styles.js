import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
box-sizing: border-box;
border-radius: 5px;
width: 30%;
@media (max-width: 700px){
    width: 95%;
}
    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        >div{
            width: 80%;
            padding: 15px 0;
            >div > input{
                background: var(--grayClean);
                border: var(--grayClean);
            }
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
export const Block = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>p{
    width: 100%;
    padding-bottom: 10px;
}
`;
export const Modules = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    @media (max-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
    >button{
        border: transparent;
        background: transparent;
        border-radius: 8px;
        padding: 10px;
        color: var(--violet);
    }
    >button:hover{
        background: rgba(78, 71, 255, 0.1);
    }
`;
export const ContainerPai = styled.div`
    width: 100vw;
    height: 100vh;
    background: #999999;
    position: absolute;
    z-index: 2;
    opacity: 0.5;
`;
export const ContainerSucess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid var(--grayClean);
    border-radius: 5px;
    background: var(--white);
    position: absolute;
    z-index: 3;
    left: 35%;
    top: 19%;
    width: 30%;
    height: 40%;
    opacity: 100%;
    >section{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
        >h3{
            font-size: 16px;
        }
        >button{
            background: transparent;
            border: transparent;
            font-size: 20px;
            color: var(--gray);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 0 10px 0;
            width: auto;
        }
    }
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 80%;
        >div{
            color: var(--gray);
        }
        >p{
            color: var(--black);
        }
        >button{
            width: 100%;
            background: var(--green);
        }
    }
`;

