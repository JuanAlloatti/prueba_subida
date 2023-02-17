
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { useLocalStorage } from "../../hooks";
import { useSetLoggedContext } from "../../providers/LoggedProvider";

const FormControl = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
gap: 15px;
`;


const Login = () => {

    const [error, setError] = useState('');
    const [token, setToken] = useLocalStorage('token');
    const {register, handleSubmit} = useForm();
    const setIsLogged = useSetLoggedContext();

    const onLogin = async (values) => {
        const res = await axios.post('https://gimnasio.ngrok.io/api/users/login', values)
        if (res.data.fatal){
        setError(res.data.fatal)
        } else {
            setError('')
            setToken(res.data.token);
            setIsLogged(true);
        }
    }

    const navigate = useNavigate();

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto'
        }} >
        <h2>Nuevo usuario</h2>
        <form onSubmit={handleSubmit(onLogin)}>
            <FormControl>
                <label>Email</label>
                          {/* ...nos genera las funciones que necesitamos */}
                <input type="email" {...register('email')} />
            </FormControl>
            <FormControl>
                <label>Contraseña</label>
                <input type="password" {...register('password')} />
            </FormControl>
                                
            <input type="submit" value="Enviar" />
        </form>
        </div>
    )
}

export default Login;