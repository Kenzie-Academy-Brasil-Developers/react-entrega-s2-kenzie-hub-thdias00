import { Body } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card'
import { Block, Modules } from "../signup/styles";
import { Container, ContentOne, ContentTwo, BoxOne, BoxTwo, BoxThree, ContainerTech, ContainerPai } from './styles'
import UserImage from '../../assets/undraw_programmer_re_owql.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Redirect, useHistory } from 'react-router';

const Dashboard = ({ authenticated, setAuthenticated }) => {
    const [dado, setDado] = useState([]);
    const [techs, setTechs] = useState(false);
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Kenzie:token")) || ""
    );
    const [user] = useState(
        JSON.parse(localStorage.getItem("@Kenzie:user")) || ""
    );
    const schema = yup.object().shape({
        tittle: yup.string().required("Campo Obrigatório")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    function loadDado() {
        api
            .get(`/users/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setDado(response.data);
            });
    }

    useEffect(() => {
        loadDado();
    }, []);

    function changeTechs() {
        setTechs(!techs);
    }
    function signupTech() {
        api
            .post(`/users/${user.id}/techs`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response);
            });
    }

    const history = useHistory();

    function back() {
        localStorage.clear();
        setAuthenticated(false)
        history.push("/")
    }
    if (!authenticated) {
        <Redirect to="/" />
    }
    return (
        <Body>
            {techs &&
                <>
                    <ContainerPai />
                    <ContainerTech>
                        <section>
                            <h3>Cadastrar Tecnologia</h3>
                            <Button onClick={changeTechs}>X</Button>
                        </section>
                        <form onSubmit={handleSubmit(signupTech)}>
                            <Input
                                variant="outlined"
                                label="Tech"
                                type="text"
                                register={register}
                                name="tittle"
                                placeholder="Nome da Tech"
                                error={!!errors.tittle}
                                helperText={errors.tittle?.message}
                            />
                            <Block>
                                <p>Selecionar status:</p>
                                <Modules>
                                    <Button value="Iniciante" onClick={module}>Iniciante</Button>
                                    <Button value="Intermediário" onClick={module}>Intermediário</Button>
                                    <Button value="Avançado" onClick={module}>Avançado</Button>
                                </Modules>
                            </Block>
                            <Button type="submit">Cadastrar</Button>
                        </form>
                    </ContainerTech>
                </>
            }
            <Container>
                <ContentOne>
                    <h1>Kenzie<span>Hub</span></h1>
                    <img src={UserImage} alt="imagem" />
                </ContentOne>
                <ContentTwo>
                    <BoxOne>
                        <section>
                            <div>
                                <h2>Minhas Tecnologias</h2>
                                <Button onClick={changeTechs}>+</Button>
                                <Card techs={dado.techs} />
                            </div>

                        </section>
                    </BoxOne>
                    <BoxTwo>
                        <section>
                            <div>
                                <h2>Meus Trabalhos</h2>
                                <Button>+</Button>
                                <Card techs={dado.works} work={true} />
                            </div>

                        </section>
                    </BoxTwo>
                    <BoxThree>
                        <section>
                            <div>
                                <img src={UserImage} alt="imagem" />
                                <div><h3>{dado.name}</h3><p>{dado.course_module}</p></div>
                            </div>
                        </section>
                        <Button onClick={back}>Logout</Button>
                    </BoxThree>
                </ContentTwo>
            </Container>
        </Body>
    )
}
export default Dashboard;