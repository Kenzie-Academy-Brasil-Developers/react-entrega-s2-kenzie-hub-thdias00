import { Container } from "./styles";

const Button = ({ children, graySchema, ...rest }) => (
    <Container graySchema={graySchema} type="button" {...rest}>
        {children}
    </Container>
);

export default Button;