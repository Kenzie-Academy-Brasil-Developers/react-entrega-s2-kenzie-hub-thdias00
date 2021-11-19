import { TextField } from "@material-ui/core";

const Input = ({ name, register, error, ...rest }) => {
    return (
        <TextField
            {...register(name)}
            error={error}
            {...rest}
        />
    )
}
export default Input;