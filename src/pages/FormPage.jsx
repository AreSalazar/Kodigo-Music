import { useForm } from "react-hook-form";

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos:", data);
  };

  return (
    <div>
      <h1>Formulario de registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Nombre*/}
        <div>
          <label>Nombre: </label>
          <input
            {...register("nombre", { required: "El nombre es obligatorio" })}
          />
          {errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email: </label>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "email inválido",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormPage;
