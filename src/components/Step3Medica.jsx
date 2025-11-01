import React from "react";
import { useForm } from "react-hook-form";

function Step3Medica({ nextStep, prevStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Información médica:", data);
    nextStep();
  };

  return (
    <div className="step-box">
      <h3>Información Médica</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="form-step">

        <label>¿El niño tiene el esquema de vacunación completo?</label>
        <select {...register("vacunacion", { required: "Campo obligatorio" })}>
          <option value="">Seleccionar</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
        {errors.vacunacion && <p className="error">{errors.vacunacion.message}</p>}

        <label>¿Cuenta con obra social o cobertura médica? (Especificar cuál)</label>
        <input type="text" {...register("obra_social")} placeholder="Ej: OSPe, Swiss Medical, etc." />

        <label>¿Actualmente está bajo tratamiento médico?</label>
        <select {...register("tratamiento_medico")}>
          <option value="">Seleccionar</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>

        <label>Si la respuesta es sí, ¿con qué profesional o especialidad?</label>
        <input type="text" {...register("profesional")} placeholder="Ej: pediatra, neurólogo, psicólogo..." />

        <label>¿Recibe medicación actualmente?</label>
        <select {...register("medicacion_actual")}>
          <option value="">Seleccionar</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>

        <label>Si la respuesta es sí, indicar nombre y dosis:</label>
        <input type="text" {...register("nombre_dosis")} placeholder="Ej: Risperidona 0.5mg cada 12hs" />

        <label>¿Tiene alergias o intolerancias alimentarias o medicamentosas?</label>
        <select {...register("alergias")}>
          <option value="">Seleccionar</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>

        <label>Si la respuesta es sí, especificar cuáles:</label>
        <input type="text" {...register("alergias_detalle")} placeholder="Ej: alergia al maní, intolerancia a la lactosa" />

        <label>¿Tuvo internaciones o intervenciones quirúrgicas?</label>
        <input type="text" {...register("internaciones")} placeholder="Ej: apendicitis en 2022" />

        <label>¿Existen antecedentes familiares de enfermedades relevantes?</label>
        <input type="text" {...register("antecedentes_familiares")} placeholder="Ej: diabetes, epilepsia, etc." />

        <label>¿Cuenta con informes médicos o diagnósticos previos? (Opcional)</label>
        <input type="file" {...register("informes_medicos")} />

        <div className="form-buttons">
          <button type="button" className="prev" onClick={prevStep}>Anterior</button>
          <button type="submit" className="next">Siguiente</button>
        </div>
      </form>
    </div>
  );
}

export default Step3Medica;