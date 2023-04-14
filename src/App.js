import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./Componentes/Boton.jsx";
import Input from "./Componentes/Input.jsx";
import Alert from "react-bootstrap/Alert"
 
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className= "App">
      <h1>Desafío de Estados y Componentes</h1>

      
      
      <Input 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        />
 
      
      {password === '070707' ? <Boton/> : null}

      {password.length >= 6 && password !== '070707' ? <Alert variant='danger'>Contraseña Incorrecta</Alert> :
       password.length >= 6 && password === '070707' ? 
       <Alert variant='success'>Contraseña Correcta</Alert> : null}
 
      
    </div>
  );
}
 
export default App;

