import React, { useState } from "react";

    const Logincomponent = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Inicio sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" minlength="8" required/>
                <button type="submit">Aceptar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Registercomponent')}>¿No tienes cuenta?. Regístrate </button>
        </div>
    )
}

export default Logincomponent