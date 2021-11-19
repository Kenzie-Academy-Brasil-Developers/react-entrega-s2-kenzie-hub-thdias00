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
box-sizing: border-box;
border-radius: 5px;
width: 30%;
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