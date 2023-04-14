import React from 'react'
 
const Input = ({ email, setEmail, password, setPassword }) => {

   
 
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control mb-3"
                placeholder="Ingresa un correo"
                id="email"
                value={email}
                onChange={(e)=>{ setEmail(e.target.value)} }
            />
 
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                className="form-control mb-3"
                placeholder="Ingresa un password"
                id="password"
                value={password}
                onChange={(e)=>{ setPassword(e.target.value)} }
            />
        </div>
    )
}
 
export default Input