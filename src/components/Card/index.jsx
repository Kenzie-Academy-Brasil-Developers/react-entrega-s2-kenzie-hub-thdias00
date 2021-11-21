import { Container, Techs } from "./styles";
import { FiCodesandbox } from 'react-icons/fi';
import PullRequest from '../../assets/icons8-pull-request-24 (1).png';

const Card = ({ techs, work }) => {
    return (
        <Container>
            {techs !== undefined && techs.map((e) =>
                <Techs key={e.id} work={work}>
                    <div>{!work ? <FiCodesandbox size={30} /> : <img src={PullRequest} />}</div>
                    <section>
                        <h3>{e.title}</h3>
                        <span>{!work ? e.status : e.description}</span>
                    </section>
                    <span />
                </Techs>)}
        </Container>
    )
}

export default Card;