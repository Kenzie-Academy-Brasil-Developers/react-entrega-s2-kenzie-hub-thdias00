import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from '../../components/Button';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from 'react-toastify';

const Login = ({ authenticated, setAuthenticated }) => {
    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Mínimo de 6 dígitos")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const history = useHistory();

    function handleNavegation(path) {
        return history.push(path);
    }

    const onSubmit = (data) => {
        api
            .post("/sessions", data)
            .then((response) => {
                localStorage.clear()
                const { token, user } = response.data;
                localStorage.setItem("@Kenzie:token", JSON.stringify(token));
                localStorage.setItem("@Kenzie:user", JSON.stringify(user));
                setAuthenticated(true);
                history.push("/dashboard")
            })
            .catch((err) => toast.error("Email ou senha inválidos"));
    }
    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container>
            <h1>Kenzie<span>Hub</span></h1>
            <Content>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        variant="outlined"
                        label="Login"
                        type="text"
                        register={register}
                        name="email"
                        placeholder="Login"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
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
                    <Button type="submit">Logar</Button>
                    <p>Criar uma página para mostrar suas <span>habilidades metas e progresso</span></p>
                    <Button onClick={() => handleNavegation("/signup")} graySchema={true}>Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}
export default Login;