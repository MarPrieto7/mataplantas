import React, { useRef, useState } from "react";


export const Registercomponent = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setTimeout(() => {
            alert("Registrado con éxito");
        },);
    }

    return (
        <div className="auth-form-container">
            <h2>Registrate</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre" minlength="8" maxlength="20" required/>
                            <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="tuemail@aaaaa.com" id="email" name="email" required  />
                            <label htmlFor="password">Contraseña</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" minlength="8" required/>
                        <div className="recaptcha"></div>

                            <button type="submit">Aceptar</button>
                </form>
        </div>
    )
}

export default Registercomponent