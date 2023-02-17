import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import ListaClientes from './components/clientes/ListaClientes';
import FormularioClientes from './components/clientes/FormularioClientes';
import Registro from './components/usuarios/Registro';
import Login from './components/usuarios/Login';
import Menu from './components/Menu';
import LoggedProvider from './providers/LoggedProvider';
import LoginGuard from './components/guards/LoginGuard'
import DetalleCliente from './components/clientes/DetalleCliente'
import RoleGuard from './components/guards/RoleGuard';

function App() {

  return (
    //agrega los dos contextos de LoggedProvider
    <LoggedProvider>
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Routes>
                                    {/* para redirigir a /clientes */}
            <Route path='' element={<Navigate to={'/clientes'}/> }/>
            <Route path='clientes' element={
              <LoginGuard>
                <ListaClientes />
              </LoginGuard>
            } />
            <Route path='clientes/new' element={
              <LoginGuard>
                <RoleGuard roles={['admin']}>
                  <FormularioClientes />
                </RoleGuard>
              </LoginGuard>
            }/>
            <Route path='clientes/:clienteId' element={
              <LoginGuard>
                <RoleGuard roles={['admin','moderator']} >
                  <DetalleCliente />
                </RoleGuard>
              </LoginGuard>
            }/>
            <Route path='registro' element={<Registro />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to={'/registro'}/> }/>
          </Routes> 
        </div>
      </BrowserRouter>
    </LoggedProvider>
  );
}

export default App;
