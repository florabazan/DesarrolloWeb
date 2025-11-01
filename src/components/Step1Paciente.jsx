import React from "react";
import { useForm } from "react-hook-form";

function Step1Paciente({ nextStep }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del paciente:", data);
    nextStep();
  };

  return (
    <div className="step-box">
      <h3 style={{ textAlign: "center", color: "#4b2e83", marginBottom: "25px" }}>
        Datos del Paciente
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre completo del niño:</label>
        <input {...register("nombre_nino", { required: "Campo obligatorio" })} />
        {errors.nombre_nino && <p className="error">{errors.nombre_nino.message}</p>}

        <label>Fecha de nacimiento:</label>
        <input type="date" {...register("fecha_nacimiento", { required: "Campo obligatorio" })} />
        {errors.fecha_nacimiento && <p className="error">{errors.fecha_nacimiento.message}</p>}

        <label>DNI:</label>
        <input type="number" {...register("dni", { required: "Campo obligatorio" })} />
        {errors.dni && <p className="error">{errors.dni.message}</p>}

        <label>Institución educativa actual (si asiste):</label>
        <input type="text" {...register("institucion", { required: false })} />

        <label>Grado / Nivel (si asiste):</label>
        <input type="text" {...register("grado", { required: false })} />

        <label>Actividades o juegos que disfruta:</label>
        <input type="text" {...register("actividades", { required: false })} />

        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default Step1Paciente;