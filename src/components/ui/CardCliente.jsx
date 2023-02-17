import styled from "styled-components";
import dayjs from "dayjs";

//para poner los meses o días escritos en español
import 'dayjs/locale/es'; 
dayjs().locale('es-ES');

const Container = styled.div`
    background-color: lightcyan;
    border: 1px solid dodgerblue;
    border-radius: 10px;
    padding: 20px;
    width: 20%;

    display: flex;
    flex-direction: column;
`

const CardCliente = ({nombre, apellidos, direccion, edad, email, fecha_nacimiento})=> {

    return (
        <Container>
            <h3>{nombre} {apellidos}</h3>
            <p>Dirección: {direccion}</p>
            <p>Edad: {dayjs().diff(fecha_nacimiento,'years')}</p>
            <p>Email: {email}</p>
                                    {/* para modificar la fecha con dayjs */}
            <p>Fecha de nacimiento: {dayjs(fecha_nacimiento).format('DD MMMM YYYY')}</p>
        </Container>
    );
}

export default CardCliente;