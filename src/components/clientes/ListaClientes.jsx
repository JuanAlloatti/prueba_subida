import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import CardCliente from "../ui/CardCliente";
//para importar estilos
import classes from "./ListaClientes.module.css"
import { useLocalStorage } from "../../hooks";

const DivMenu = styled.div`
padding: 30px;
margin: 30px auto;
background-color: lightblue;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px;
border: 1px solid black;
`

const ListaClientes = () => {

    const [arrClientes, setArrClientes] = useState([]);
    const [token] = useLocalStorage('token');

    useEffect(()=>{
        const fetchData = async ()=>{   //porque no me funca la BBDD, uso la del profe
            const res = await axios.get('https://gimnasio.ngrok.io/api/clients');
            console.log(res.data);
            setArrClientes(res.data);
        }
        fetchData();
    }, []);

    return (
        <DivMenu>
            <p>ListaClientes</p>
            <p>Número de clientes: {arrClientes.length} </p>
            <div class={classes.clientes}>
                {arrClientes.map(cliente => (
                    // ...cliente = le pasa todos los datos del cliente sin poner nombre= {cliente.nombre}, etc etc
                    <CardCliente key={cliente.id} {...cliente} />
                ))}
            </div>
        </DivMenu>
    )
}

export default ListaClientes;