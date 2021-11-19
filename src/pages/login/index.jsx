import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from '../../components/Button';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import api from "../../services/api";

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Mínimo de 6 dígitos")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        formState,
    } = useForm({ resolver: yupResolver(schema) });

    const history = useHistory();

    function handleNavegation(path) {
        return history.push(path);
    }

    const onSubmit = (data) => {
        console.log(data);
        api
            .post("/sessions", data)
            .then((response) => {
                console.log(response)
                history.push("/dashboard")
            })
            .catch((err) => console.log(err))
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
                        error={!!errors.Login}
                        helperText={errors.Login?.message}
                    />
                    <Input
                        variant="outlined"
                        label="Senha"
                        type="password"
                        register={register}
                        name="password"
                        placeholder="Senha"
                        error={!!errors.Password}
                        helperText={errors.Pasword?.message}
                    />
                    <Button type="submit" type="submit">Logar</Button>
                    <p>Criar uma página para mostrar suas <span>habilidades metas e progresso</span></p>
                    <Button onClick={() => handleNavegation("/signup")} graySchema={true}>Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}
export default Login;