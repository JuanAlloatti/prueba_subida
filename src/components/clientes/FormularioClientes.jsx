import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
        // {dniValidator} = dniValidator.dniValidator
import { dniValidator } from "../../validators";

const FormControl = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
gap: 15px;
`;

const FormularioClientes = () => {

    const {register, handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const creaCliente = async (values) =>{
        // POST http:/localhost:3000/api/clients
        // en el body enviamos el objeto con los datos (values)
        const res = await axios.post('https://gimnasio.ngrok.io/api/clients', values);
        if(res.data.fatal) {
            //significa que hubo algun tipo de error
            alert(res.data.fatal);
        } else {
            alert('Cliente creado correactamente');
            navigate('/clientes');
        }
    }

    return (
            <div style={{
                maxWidth: '600px',
                margin: '0 auto'
            }} >
            <h2>Nuevo cliente</h2>
            <form onSubmit={handleSubmit(creaCliente)}>
                <FormControl>
                    <label>Nombre</label>
                              {/* ...nos genera las funciones que necesitamos */}
                    <input type="text"{...register('nombre')} />
                </FormControl>
                <FormControl>
                    <label>Apellidos</label>
                    <input type="text"{...register('apellidos')}/>
                </FormControl>
                <FormControl>
                    <label>Dirección</label>
                    <input type="text"{...register('direccion')}/>
                </FormControl>
                <FormControl>
                    <label>Email</label>
                    <input type="email"{...register('email')}/>
                </FormControl>
                <FormControl>
                    <label>Edad</label>
                    <input type="number"{...register('edad')}/>
                </FormControl>
                <FormControl>
                    <label>Género</label>
                    <input type="text"{...register('genero')}/>
                </FormControl>
                <FormControl>
                    <label>Cuota</label>
                    <input type="text"{...register('cuota')}/>
                </FormControl>
                <FormControl>
                    <label>Fecha de Nacimiento</label>
                    <input type="date"{...register('fecha_nacimiento')}/>
                </FormControl>
                <FormControl>
                    <label>DNI</label>   {/* para meter validaciones, despues de la , */}
                    <input type="text"{...register('dni', {
                        validate: dniValidator()
                    })}/>
                </FormControl>
                <input type="submit" value="Enviar" />
            </form>
            </div>
    )
}

export default FormularioClientes;



// Investigar qué petición tenemos que hacer al back para registrar usuarios.

//PISTAS: Miramos en peticiones-usuarios.rest o en routes/api/users.js

// En el componente de registro generamos un formulario que me permita enviar dicha petición al back