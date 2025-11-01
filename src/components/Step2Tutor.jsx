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

      <div className="step-box">
        <h3>Datos del Tutor</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre completo del Tutor:</label>
          <input {...register("nombre_tutor", { required: "Campo obligatorio" })} />
          {errors.nombre_tutor && <p className="error">{errors.nombre_tutor.message}</p>}

         <label>DNI:</label>
          <input type="number" {...register("dni", { required: "Campo obligatorio" })} />
          {errors.dni && <p className="error">{errors.dni.message}</p>}
          
          <label>Relación con el paciente:</label>
          <input {...register("relacion", { required: "Campo obligatorio" })} />
          {errors.relacion && <p className="error">{errors.relacion.message}</p>}
          
          <label>Ocupación:</label>
          <input {...register("ocupacion", { required: "Campo obligatorio" })} />
          {errors.ocupacion && <p className="error">{errors.ocupacion.message}</p>}
          
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