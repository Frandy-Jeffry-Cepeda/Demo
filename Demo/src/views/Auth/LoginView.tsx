import { useForm } from "react-hook-form";
import { AuthLogin } from "../../types";

export default function LoginView() {

  const { handleSubmit, register, reset, formState: { errors }} = useForm<AuthLogin>();

  const onSubmit = () => {
    console.log('Login Enviado')
    reset()
  }

  return (
    <>
      <div className="flex flex-col justify-center bg-gray-100 items-center px-5">
        <div className="relative top-10 sm:top-24 w-full max-w-lg bg-white p-10 rounded-lg shadow-lg">

          <form 
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >

            {/* Email */}
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className={`mt-2 block w-full p-3 bg-gray-50 border ${
                  errors.Email ? 'border-red-500' : 'border-gray-300'
                } rounded`}
                placeholder="Email Address"
                {...register("Email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Formato de email inválido",
                  },
                })}
              />
               {errors.Email && <p className="text-red-600">{errors.Email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="password">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className={`mt-2 block w-full p-3 bg-gray-50 border ${
                  errors.Password ? 'border-red-500' : 'border-gray-300'
                } rounded`}
                placeholder="Password"
                {...register("Password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres, un número y una letra",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message: "La contraseña debe tener al menos 6 caracteres, un número y una letra",
                  },
                })}
              />
              {errors.Password && <p className="text-red-600">{errors.Password.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <input
                type="submit"
                className="w-full bg-indigo-700 hover:bg-indigo-800 p-3 text-white font-bold text-lg cursor-pointer rounded"
                value="Sign In"
              />
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
