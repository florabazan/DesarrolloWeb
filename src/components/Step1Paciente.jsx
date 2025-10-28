import React from "react";
import { useForm } from "react-hook-form";

function Step1Paciente({ nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del paciente:", data);
    nextStep();
  };

  return (
    <>
      <style>{`
        .form-container {
          background-color: #fdf6fb;
          padding: 30px;
          border-radius: 15px;
          width: 450px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: #000;
        }
        h3 { text-align: center; color: #4b2e83; margin-bottom: 25px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input {
          width: 100%; padding: 8px; margin-bottom: 15px;
          border-radius: 8px; border: 1px solid #ccc; outline: none;
        }
        input:focus { border-color: #d79ce7; box-shadow: 0 0 4px rgba(215,156,231,0.5); }
        button {
          width: 100%; padding: 10px; border-radius: 8px;
          background-color: #d79ce7; color: white; border: none;
          font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        button:hover { background-color: #b966d1; }
        p.error { color: red; font-size: 0.9em; margin-top: -10px; }
      `}</style>

      <div className="form-container">
        <h3>Datos del Paciente</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre:</label>
          <input {...register("nombre", { required: "Campo obligatorio" })} />
          {errors.nombre && <p className="error">{errors.nombre.message}</p>}

          <label>Apellido:</label>
          <input {...register("apellido", { required: "Campo obligatorio" })} />
          {errors.apellido && <p className="error">{errors.apellido.message}</p>}

          <label>DNI:</label>
          <input type="number" {...register("dni", { required: "Campo obligatorio" })} />
          {errors.dni && <p className="error">{errors.dni.message}</p>}

          <button type="submit">Siguiente</button>
        </form>
      </div>
    </>
  );
}

export default Step1Paciente;