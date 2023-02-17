import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useLoggedContext, useSetLoggedContext } from "../providers/LoggedProvider";

const Menu = ()=> {

    const navigate = useNavigate();

    const isLogged = useLoggedContext();
    const setIsLogged = useSetLoggedContext();

    const onLogout = () =>{
        localStorage.removeItem('token')
        navigate('/login');
        setIsLogged(false);
    }

    const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #6503a1;
    color: white;
    font-size: 26px;
    height: 60px;
    align-items: center;
    padding-right: 20px;
    `
    const UlMenu = styled.ul`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-right: 20px;
    `

    const LiMenu = styled.li`
    list-style: none;
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px 10px;
    transition: 0.25s;
    :hover {
        background-color: white;
        color: #6503a1;
        border-radius: 5px;
        cursor: pointer;
    }
    `

    return (
            <NavBar>
                    {isLogged && <Link to={'/clientes'}>
                        <LiMenu>Lista Clientes</LiMenu>
                    </Link>}    
                    {isLogged && <Link to={'/clientes/new'}>
                        <LiMenu>Nuevo Cliente</LiMenu>
                    </Link>}  
                    {isLogged && <Link to={'clientes/?cliente_id'}>
                        <LiMenu>Detalle Cliente</LiMenu>
                    </Link>}    
                    {!isLogged && <Link to={'/registro'}>
                        <LiMenu>Registro</LiMenu>
                    </Link>}   
                    {!isLogged && <Link to={'/login'}>
                        <LiMenu>Login</LiMenu>
                    </Link>}                                 
                    {isLogged && <LiMenu onClick={onLogout}>Logout</LiMenu>}
            </NavBar>
    );
}

export default Menu;