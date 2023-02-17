import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const FormControl = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
gap: 15px;
`;

const Registro = () => {

    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();


    const creaUsuario = async (values) =>{
        // POST http:/localhost:3000/api/clients
        // en el body enviamos el objeto con los datos (values)
        const res = await axios.post('https://gimnasio.ngrok.io/api/users/register', values);
        if(res.data.fatal) {
            //significa que hubo algun tipo de error
            alert(res.data.fatal);
        } else {
            alert('Usuario creado correactamente');
            navigate('/login');
        }
    }

    return (
            <div style={{
                maxWidth: '600px',
                margin: '0 auto'
            }} >
            <h2>Nuevo usuario</h2>
            <form onSubmit={handleSubmit(creaUsuario)}>
                <FormControl>
                    <label>Usuario</label>
                              {/* ...nos genera las funciones que necesitamos */}
                    <input type="text"{...register('username')} />
                </FormControl>
                <FormControl>
                    <label>Email</label>
                    <input type="email"{...register('email')}/>
                </FormControl>
                <FormControl>
                    <label>Contraseña</label>
                    <input type="password"{...register('password')}/>
                </FormControl>
                                    
                <input type="submit" value="Enviar" />
            </form>
            </div>
    )
}

export default Registro;