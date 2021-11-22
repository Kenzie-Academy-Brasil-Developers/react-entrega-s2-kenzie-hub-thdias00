import { Container, Techs } from "./styles";
import { FiCodesandbox } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri'
import PullRequest from '../../assets/icons8-pull-request-24 (1).png';
import Button from "../Button";
import api from "../../services/api";
import { useState } from "react";

const Card = ({ techs, work }) => {
    //token e dados do usuário
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Kenzie:token")) || ""
    );
    function removeTech(e) {
        api
            .delete(`users/techs/${e.currentTarget.value}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => console.log(response))
    }
    return (
        <Container>
            {techs !== undefined && techs.map((e) =>
                <Techs key={e.id} work={work}>
                    <div>
                        <div>{!work ? <FiCodesandbox size={30} /> : <img src={PullRequest} alt="" />}</div>
                    </div>
                    <section>
                        <h3>{e.title}</h3>
                        <span>{!work ? e.status : e.description}</span>
                    </section>
                    <Button value={e.id} onClick={removeTech}><RiDeleteBin5Line size={20} /></Button>
                </Techs>)}
        </Container>
    )
}

export default Card;