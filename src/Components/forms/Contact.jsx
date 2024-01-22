import React, { useState } from "react";
import './ContactForm.css'; // Importar estilos
import InputField from "./componentes/InputField";
import TextAreaField from "./componentes/TextAreaField";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { name, phone, email, note });
    setTimeout(() => {
      alert("Formulario de contacto enviado con éxito");
  }, 2000);
  };

  return (
  

    <div className="contact-form-container">
      
      <form className="contact-form" onSubmit={handleSubmit}>
      <h4>Dudas o incidencias.Contáctanos</h4>
        <InputField
        label="Nombre"
        type="text"
        id="name"
        value={name}
        onChange={setName}
        />
        <InputField
        label="Teléfono"
        type="tel"
        id="phone"
        value={phone}
        onChange={setPhone}
        />
        <InputField
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={setEmail}
        />
        <TextAreaField label="Nota" id="note" value={note} onChange={setNote} />
      <button type="submit">Enviar</button>
      </form>
    </ div>
  );
};

export default ContactForm;
