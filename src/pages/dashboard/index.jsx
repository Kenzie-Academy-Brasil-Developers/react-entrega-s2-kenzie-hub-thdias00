import { Body } from './styles';
import { Container, ContentOne, ContentTwo, BoxOne, BoxTwo, BoxThree } from './styles'

const Dashboard = () => {
    return (
        <Body>
            <Container>
                <ContentOne>
                    <h1>Kenzie<span>Hub</span></h1>
                    <img src="../../assets/undraw_programmer_re_owql.svg" alt="imagem" />
                </ContentOne>
                <ContentTwo>
                    <BoxOne></BoxOne>
                    <BoxTwo></BoxTwo>
                    <BoxThree></BoxThree>
                </ContentTwo>
            </Container>
        </Body>
    )
}
export default Dashboard;