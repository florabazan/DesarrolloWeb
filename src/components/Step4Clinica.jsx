import React from "react";
import { useForm } from "react-hook-form";

function Step4Clinica({ nextStep, prevStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Información clínica:", data);
    nextStep();
  };

  return (
    <div className="step-box">
      <h3>Información Clínica</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="form-step">
        <label>¿Cuál es el motivo principal de la consulta?</label>
        <textarea
          {...register("motivo_consulta", { required: "Campo obligatorio" })}
          rows="2"
        ></textarea>
        {errors.motivo_consulta && <p className="error">{errors.motivo_consulta.message}</p>}

        <label>¿Desde cuándo observan esta dificultad o cambio?</label>
        <input type="text" {...register("tiempo_dificultad")} />

        <label>¿Qué esperan lograr con la intervención terapéutica?</label>
        <textarea {...register("objetivos_terapia")} rows="2"></textarea>

        <label>¿Recibe actualmente apoyo escolar o terapéutico?</label>
        <select {...register("apoyo_actual")}>
          <option value="">Seleccionar</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>

        <label>Si la respuesta es sí, ¿con qué profesionales?</label>
        <textarea {...register("profesionales_apoyo")} rows="2"></textarea>

        <label>¿Hay situaciones que generen frustración o ansiedad en el niño?</label>
        <textarea {...register("frustracion")} rows="2"></textarea>

        <label>¿Qué fortalezas o habilidades destacarían de él/ella?</label>
        <textarea {...register("fortalezas")} rows="2"></textarea>

        <label>Datos relevantes adicionales que considere importante mencionar:</label>
        <textarea {...register("datos_adicionales")} rows="3"></textarea>

        <div className="buttons">
          <button type="button" className="prev" onClick={prevStep}>
            Anterior
          </button>
          <button type="submit">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step4Clinica;