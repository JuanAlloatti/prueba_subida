import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleCliente = () => {

    const [cliente, setCliente] = useState();

    const {clienteId} = useParams();

    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(`https://gimnasio.ngrok.io/api/clients/${clienteId}`)
            setCliente(response.data);
        }
        fetchData();
    },[clienteId]);

        return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            {cliente ? 
            (
            <>
                <h2>{cliente.nombre} {cliente.apellidos} </h2>
                <p>Email: {cliente.email} </p>
                <p>Dirección: {cliente.direccion} </p>
                <p>Cuota: {cliente.cuota} </p>
                <p>DNI: {cliente.dni} </p>
            </>
            )
            :
            <p>Recuperando cliente</p>
        }
        </div>
    );
}
export default DetalleCliente;