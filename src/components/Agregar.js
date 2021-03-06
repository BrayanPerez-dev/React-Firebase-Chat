import React, { useState, useContext } from 'react';

import { ChatContext } from '../context/ChatProvider';

const Agregar = () => {
  const { agregarMensajes, usuario } = useContext(ChatContext);
  const [mensaje, setMensaje] = useState('');

  const formulario = e => {
    e.preventDefault();
    if (!mensaje.trim) {
      console.log('texto vacio');
      return;
    }
    agregarMensajes(usuario.uid, mensaje);
    setMensaje('');
  };
  return (
    <form
      className="input-group fixed-bottom p-3 bg-dark"
      onSubmit={formulario}
    >
      <input
        type="text"
        className="form-control"
        onChange={e => setMensaje(e.target.value)}
        value={mensaje}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Agregar;
