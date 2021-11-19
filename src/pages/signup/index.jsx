import { Container, Content, Block, Modules } from "./styles";
import Input from "../../components/Input";
import Button from '../../components/Button';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import api from "../../services/api";

const Signup = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        bio: yup.string().required("Campo Obrigatório"),
        contact: yup.string().required("Campo Obrigatório"),
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
    return (
        <Container>
            <h1>Kenzie<span>Hub</span></h1>
            <Content>
                <form>
                    <Input
                        variant="outlined"
                        label="Nome"
                        type="text"
                        register={register}
                        name="name"
                        placeholder="Nome"
                        error={!!errors.name}
                        helperText={errors.Name?.message}
                    />
                    <Input
                        variant="outlined"
                        label="Email"
                        type="email"
                        register={register}
                        name="email"
                        placeholder="Email"
                        error={!!errors.Email}
                        helperText={errors.Email?.message}
                    />
                    <Input
                        variant="outlined"
                        label="Bio"
                        type="text"
                        register={register}
                        name="bio"
                        placeholder="Bio"
                        error={!!errors.Bio}
                        helperText={errors.Bio?.message}
                    />
                    <Input
                        variant="outlined"
                        label="Contato"
                        type="text"
                        register={register}
                        name="contact"
                        placeholder="Contato"
                        error={!!errors.Contact}
                        helperText={errors.Contact?.message}
                    />
                    <Block>
                        <p>Selecionar módulo:</p>
                        <Modules>
                            <button>Primeiro</button>
                            <button>Segundo</button>
                            <button>Terceiro</button>
                            <button>Quarto</button>
                        </Modules>
                    </Block>
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
                    <Input
                        variant="outlined"
                        label="Confirmar Senha"
                        type="password"
                        register={register}
                        name="ConfirmPassword"
                        placeholder="Confrimar Senha"
                        error={!!errors.ConfirmPassword}
                        helperText={errors.ConfirmPasword?.message}
                    />
                    <Button type="submit" onClick={() => handleNavegation("/dashboard")} type="submit">Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}
export default Signup;