import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    transform: translateX(22.5%);
    width: 70%;
`;
export const ContentOne = styled.div`
    width:100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--white);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    margin: 30px 0;
    > h1{
        text-align: center;
        color: var(--black);
        padding: 20px;
        font-size: 30px;
        @media (max-width: 1200px){
            font-size: 15px;
        }
        >span{
            background: var(--violet);
            color: var(--white);
        }
    }
    >img{
        width: 89px;
        height: 67px;
        margin: 0 30px;
        @media (max-width: 1200px){
            width: 50px;
            height: 50px;
            margin: 0 15px;
        }
    }
`;
export const ContentTwo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: 1200px){
        flex-direction: column;
    }
`;

export const BoxOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    border-radius: 5px;
    width: 33%;
    height: 100%;
    margin-right: 20px;
    @media (max-width: 1200px){
        width: 100%;
        margin: 0 0 20px 0;
    }
    >section{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px;
        >div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
            >h2{
                font-size: 22px;
                width: 80%;
                @media (max-width: 1200px){
                    font-size: 15px;
                }
            }
            >button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20%;
                height: 34px;
                font-size: 40px;
                background: var(--green);
                border: 1px solid var(--green);
                border-radius: 5px;
                color: var(--white);
                @media (max-width: 1200px){
                    width: 20px;
                    height: 20px;
                    font-size: 20px;
                    padding: 0;
                }
            }
        }
    }
`;

export const BoxTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    width: 33%;
    height: 100%;
    border-radius: 5px;
    margin-right: 20px;
    @media (max-width: 1200px){
        width: 100%;
        margin: 0 0 20px 0;
    }
    >section{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px;
        >div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
            >h2{
                font-size: 22px;
                width:80%;
                @media (max-width: 1200px){
                    font-size: 15px;
                }
            }
            >button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20%;
                height: 34px;
                font-size: 40px;
                background: var(--violet);
                border: 1px solid var(--violet);
                border-radius: 5px;
                color: var(--white);
                @media (max-width: 1200px){
                    width: 20px;
                    height: 20px;
                    font-size: 20px;
                    padding: 0;
                }
            }
        }
    }
`;

export const BoxThree = styled.div`
    width: 33%;
    height: 100%;
    padding-bottom: 20px;
    border-radius: 5px;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1200px){
        width: 100%;
        margin-bottom: 20px;
    }
    >section {
        > div{
            display: flex;
            background: var(--violet);
            border-radius: 5px;
            padding: 20px;
            color: var(--white);
             > img{
                width: 20%;
                height: 20%;
            }
            >div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 20px;
            }
        }
    }
    >button{
        background: var(--grayClean);
        color: var(--gray);
        margin-top: 20px;
    }
`;
export const ContainerPai = styled.div`
    width: 100vw;
    height: 180vh;
    background: #999999;
    position: absolute;
    z-index: 2;
    opacity: 0.5;
`;
export const ContainerTech = styled.div`
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
    height: auto;
    opacity: 100%;
    @media (max-width: 1200px){
        left: 33%;            
    }
    @media (max-width: 799px){
        left: 1%;
        width: 99%;
    }
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
    >form{
        height: 100%;
        >div{
            width: 100%;
            margin-bottom: 20px;
        }
        >button{
            width: 100%;
        }
    }
`;
