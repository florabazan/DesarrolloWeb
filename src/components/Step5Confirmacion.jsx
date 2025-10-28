import React from "react";
import { useForm } from "react-hook-form";

function Step5Confirmacion({ prevStep }) {
  const { handleSubmit } = useForm();
  const onSubmit = () => alert("🎉 Entrevista Tika completada con éxito. ¡Gracias!");

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
        .confirmation-box {
          background-color: #fff;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 20px;
          text-align: left;
          border: 1px solid #e5d4f1;
        }
        .buttons { display: flex; justify-content: space-between; }
        button {
          width: 48%; padding: 10px; border-radius: 8px;
          background-color: #d79ce7; color: white; border: none;
          font-weight: bold; cursor: pointer; transition: 0.3s;
        }
        button:hover { background-color: #b966d1; }
        button.prev { background-color: #f0d5f7; color: #4b2e83; }
      `}</style>

      <div className="form-container">
        <h3>Revisión Final</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="confirmation-box">
            <p>✔️ Datos del paciente</p>
            <p>✔️ Datos del tutor</p>
            <p>✔️ Información médica</p>
            <p>✔️ Información clínica</p>
            <p>Todo listo para confirmar el registro de la entrevista.</p>
          </div>

          <div className="buttons">
            <button type="button" className="prev" onClick={prevStep}>Anterior</button>
            <button type="submit">Finalizar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Step5Confirmacion;