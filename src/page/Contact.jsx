import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../src/Components/contactform/InputField";
import TextAreaField from "../../src/Components/contactform/TextAreaField";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { name, phone, email, note });

    // Simulación de un proceso asíncrono, por ejemplo, una solicitud HTTP
    setTimeout(() => {
      alert("Formulario de contacto enviado con éxito");

      // Redirige a la página de inicio después de la alerta
      navigate("/");
    }, 0);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>CONTACTA<br></br>con nuestros expertos en clorofila</h4>
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
        <button className="button-contact" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;