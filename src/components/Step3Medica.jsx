import React from "react";
import { useForm } from "react-hook-form";

function Step3Medica({ nextStep, prevStep }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Información médica:", data);
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
        input, textarea {
          width: 100%; padding: 8px; margin-bottom: 15px;
          border-radius: 8px; border: 1px solid #ccc; outline: none;
        }
        input:focus, textarea:focus { border-color: #d79ce7; box-shadow: 0 0 4px rgba(215,156,231,0.5); }
        .buttons { display: flex; justify-content: space-between; margin-top: 10px; }
        button {
          width: 48%; padding: 10px; border-radius: 8px;
          background-color: #d79ce7; color: white; border: none;
          font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        button:hover { background-color: #b966d1; }
        button.prev { background-color: #f0d5f7; color: #4b2e83; }
      `}</style>

      <div className="form-container">
        <h3>Información Médica</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>¿Está bajo medicación?</label>
          <input {...register("medicacion")} placeholder="Sí / No o detalle" />

          <label>Antecedentes médicos:</label>
          <textarea {...register("antecedentes")} placeholder="Describa los antecedentes..." />

          <label>Vacunas completas:</label>
          <input {...register("vacunas")} placeholder="Sí / No / Parcial" />

          <div className="buttons">
            <button type="button" className="prev" onClick={prevStep}>Anterior</button>
            <button type="submit">Siguiente</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Step3Medica;