import { useForm } from "react-hook-form";

export default function LoginView() {

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

  return (
    <div className="mx-auto max-h-lg max-w-lg p-10 py-60">
     
      {/* Email */}
      <div className="mb-4">
            <label className="text-gray-800" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Email Address"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
          </div>

           {/* Contraseña */}
           <div className="mb-4">
            <label className="text-gray-800" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message:
                    "La contraseña debe tener al menos 6 caracteres, un número y una letra",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    "La contraseña debe tener al menos 6 caracteres, un número y una letra",
                },
              })}
            />
          </div>

           {/* Botón de registro */}
           <div>
            <input
              type="submit"
              className="mx-auto w-1/2 flex  bg-indigo-700 hover:bg-indigo-800 p-3 text-white font-bold text-lg cursor-pointer rounded"
              value="Sign In"
            />
          </div>

    </div>
  )
}
