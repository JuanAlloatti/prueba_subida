import jwtDecode from 'jwt-decode';
import { useLocalStorage } from '../../hooks';

// este guard va por detrás del guard que chequea si existe el token
const RoleGuard = ({children, roles }) => {

    const [token] = useLocalStorage('token');
    //objeto que codificamos dentro del token
    const {user_role} = jwtDecode(token);

    if (!roles.includes(user_role)) {
        return <h1>PRIVADO: Espacio sólo para administradores</h1>
    }

    return children;
}

export default RoleGuard;