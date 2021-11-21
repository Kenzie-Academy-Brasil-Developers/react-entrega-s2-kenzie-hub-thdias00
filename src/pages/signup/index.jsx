import { Container, Content, Block, Modules, ContainerSucess, ContainerPai } from "./styles";
import Input from "../../components/Input";
import Button from '../../components/Button';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useState } from "react";

const Signup = ({ authenticated, setAuthenticated }) => {
    const [signupSucess, setSignupSucess] = useState(false);
    const [modules, setModules] = useState("")

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        bio: yup.string().required("Campo Obrigatório"),
        contact: yup.string().required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório").min(6, "Mínimo de 6 dígitos"),
        confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password")], "Senhas diferentes")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const history = useHistory();

    function module(event) {
        setModules(event.target.value)
    }

    const onSubmit = (data) => {
        data.course_module = modules;
        delete data.confirmPassword;
        api
            .post("/users", data)
            .then((response) => setSignupSucess(true))
            .catch((err) => toast.error("Cadastro não Realizado"));
    }
    function changeSignup() {
        setSignupSucess(false);
        history.push("/");
    }
    function changeSucess() {
        setSignupSucess(!signupSucess);
    }


    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            {signupSucess &&
                <>
                    <ContainerPai />
                    <ContainerSucess>
                        <section>
                            <h3>Sucesso</h3>
                            <Button onClick={changeSucess}>X</Button>
                        </section>
                        <div>
                            <h2>Yeesss!</h2>
                            <div>Tudo certinho, seu cadastro deu bom demais</div>
                            <p>Agora basta fazer seu login e começar sua jornada...</p>
                            <Button onClick={changeSignup}>Ir para login</Button>
                        </div>
                    </ContainerSucess>
                </>
            }
            <Container signupSucess={signupSucess}>
                <h1>Kenzie<span>Hub</span></h1>
                <Content>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            variant="outlined"
                            label="Nome"
                            type="text"
                            register={register}
                            name="name"
                            placeholder="Nome"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <Input
                            variant="outlined"
                            label="Email"
                            type="email"
                            register={register}
                            name="email"
                            placeholder="Email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <Input
                            variant="outlined"
                            label="Bio"
                            type="text"
                            register={register}
                            name="bio"
                            placeholder="Bio"
                            error={!!errors.bio}
                            helperText={errors.bio?.message}
                        />
                        <Input
                            variant="outlined"
                            label="Contato"
                            type="text"
                            register={register}
                            name="contact"
                            placeholder="Contato"
                            error={!!errors.contact}
                            helperText={errors.contact?.message}
                        />
                        <Block>
                            <p>Selecionar módulo:</p>
                            <Modules>
                                <Button value="Primeiro módulo (Introdução ao Frontend)" onClick={module}>Primeiro</Button>
                                <Button value="Segundo Módulo (Frontend avançado)" onClick={module}>Segundo</Button>
                                <Button value="Terceiro módulo (Introdução ao Backend)" onClick={module}>Terceiro</Button>
                                <Button value="Quarto módulo (Backend Avançado)" onClick={module}>Quarto</Button>
                            </Modules>
                        </Block>
                        <Input
                            variant="outlined"
                            label="Senha"
                            type="password"
                            register={register}
                            name="password"
                            placeholder="Senha"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <Input
                            variant="outlined"
                            label="Confirmar Senha"
                            type="password"
                            register={register}
                            name="confirmPassword"
                            placeholder="Confirmar Senha"
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </Content>
            </Container>
        </>
    )
}
export default Signup;