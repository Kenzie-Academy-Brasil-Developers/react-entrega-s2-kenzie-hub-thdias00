import styled from 'styled-components';


export const Body = styled.body`
    background: var(--grayClean);
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;
export const ContentOne = styled.div`
    width:100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    background: var(--white);
`;
export const ContentTwo = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const BoxOne = styled.div`
    background: var(--white);
    padding: 100px;
`;

export const BoxTwo = styled.div`
    background: var(--white);
    padding: 100px;
`;

export const BoxThree = styled.div`
    background: var(--white);
    padding: 100px;
`;