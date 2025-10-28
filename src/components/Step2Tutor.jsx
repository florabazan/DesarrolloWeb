import React from "react";
import { useForm } from "react-hook-form";

function Step2Tutor({ nextStep, prevStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del tutor:", data);
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
        .buttons { display: flex; justify-content: space-between; margin-top: 10px; }
        button {
          width: 48%; padding: 10px; border-radius: 8px;
          background-color: #d79ce7; color: white; border: none;
          font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        button:hover { background-color: #b966d1; }
        button.prev { background-color: #f0d5f7; color: #4b2e83; }
        button.prev:hover { background-color: #e0bdf2; }
        p.error { color: red; font-size: 0.9em; margin-top: -10px; }
      `}</style>

      <div className="form-container">
        <h3>Datos del Tutor</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre del Tutor:</label>
          <input {...register("nombre_tutor", { required: "Campo obligatorio" })} />
          {errors.nombre_tutor && <p className="error">{errors.nombre_tutor.message}</p>}

          <label>Relación con el paciente:</label>
          <input {...register("relacion", { required: "Campo obligatorio" })} />
          {errors.relacion && <p className="error">{errors.relacion.message}</p>}

          <label>Teléfono:</label>
          <input {...register("telefono", { required: "Campo obligatorio" })} />
          {errors.telefono && <p className="error">{errors.telefono.message}</p>}

          <label>Email:</label>
          <input type="email" {...register("email", { required: "Campo obligatorio" })} />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <div className="buttons">
            <button type="button" className="prev" onClick={prevStep}>Anterior</button>
            <button type="submit">Siguiente</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Step2Tutor;