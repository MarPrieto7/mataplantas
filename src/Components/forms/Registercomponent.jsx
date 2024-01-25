import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';

export const Registercomponent = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const onChange = (value) => {
    // Si el valor del reCAPTCHA es válido, establecer el estado isRecaptchaVerified en true
    setIsRecaptchaVerified(!!value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el reCAPTCHA se ha verificado
    if (!isRecaptchaVerified) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    // Resto del código para el envío del formulario
    console.log(email);
    setTimeout(() => {
      alert("Registrado con éxito");
      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
  }

  return (
    <div className="App">
    <div className="auth-form-container">
      <h2>Regístrate</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre" minLength="8" maxLength="20" required/>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="tuemail@aaaaa.com" id="email" name="email" required  />
        <label htmlFor="password">Contraseña</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" minLength="8" required/>
        <div className="recaptcha">
          <ReCAPTCHA
            sitekey="6Lc22VkpAAAAAGk5Cfhs87A96VBhP3qnK-2OTKUL"
            onChange={onChange}
          />
        </div>
        <button className="button-register" type="submit">Aceptar</button>
      </form>
    </div>
    </div>
  );
}

export default Registercomponent;
