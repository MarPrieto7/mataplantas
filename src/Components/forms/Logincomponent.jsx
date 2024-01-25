import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logincomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);


    // Después de la autenticación exitosa, redirige a la página de inicio
    navigate("/");
  }

  return (
    <div className='App'>
    <div className="auth-form-container">
      <h2>Inicio sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
        <label htmlFor="password">Contraseña</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" minLength="8" required/>
        <button className="button-login" type="submit">Aceptar</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('Registercomponent')}>¿No tienes cuenta?. Regístrate </button>
    </div>
    </div>
  );
}

export default Logincomponent;

