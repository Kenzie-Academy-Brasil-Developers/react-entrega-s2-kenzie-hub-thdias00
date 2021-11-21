import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    padding-top: 20px;
`;

export const Techs = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    margin-bottom: 20px;
    @media (max-width: 1200px){
        height: auto;            
    }
    :hover{
        cursor: pointer;
        >div{
            >div{
                background: ${(props) => (props.work ? "#403CAA" : "#11995E")};
                color: ${(props) => (props.work ? "#403CAA" : "#E7E5Ef")};
            }
        }
        >span{
            background: ${(props) => (props.work ? "#403CAA" : "#11995E")};
        }
    }
    >div{
        width: 30%;
        @media (max-width: 1200px){
            width: 10%;
        }
        >div{
            width: 100%;
            height: 100%;
            background: ${(props) => (props.work ? "#403CAA1A" : "#E7F5Ef")};
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${(props) => (props.work ? "#403CAA" : "#11995E")};
        }
    }
    >section{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        @media (max-width: 1200px){
                margin-right: 10px;
                width: 80%;
            }
        >span{
            display: flex;
            justify-content: center;
            width:${(props) => (props.work ? "100%" : "50%")};
            padding:5px;
            background: ${(props) => (props.work ? "##ffffff" : "#E7F5EF")};
            border-radius: 5px;
            color: ${(props) => (props.work ? "##999999" : "#11995E")};
            margin-top: ${(props) => (props.work ? "1px" : "20px")};
            @media (max-width: 1200px){
                margin-top: 0;
                overflow: hidden;    
            }
            @media (min-width: 1201px){
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
    >span{
        width: 4%;
        height: 100%;
        background: ${(props) => (props.work ? "#403CAA1A" : "#E7E5Ef")};
    }
`;