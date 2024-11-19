import { useForm } from "react-hook-form";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  {/* HACER ERRORERS DE LOS FORMS */}

  return (
    <>
      <div className="mx-10 sm:mx-20 lg:mx-20 max-w-full sm:p-10">
        <form className="md:grid-cols-2 gap-6 mt-10" onSubmit={() => {}}>
          {/* Nombre completo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="firstName">
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
                placeholder="First Name"
                {...register("firstName", {
                  required: "El primer nombre es obligatorio",
                })}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-800" htmlFor="lastName">
                Last Name:
              </label>
              <input
                id="lastName"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
                placeholder="Last Name"
                {...register("lastName", {
                  required: "El apellido es obligatorio",
                })}
              />
            </div>
          </div>

          {/* Nombre de la empresa */}
          <div className="mb-4">
            <div className="flex flex-col">
              <label className="text-gray-800" htmlFor="companyName">
                Company Name:
              </label>
              <label className="text-sm">
                The organization that you are working
              </label>
            </div>
            <input
              id="companyName"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Company Name"
              {...register("companyName", {
                required: "El nombre de la empresa es obligatorio",
              })}
            />
          </div>

          {/* Ubicación */}
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="location">
              Location:
            </label>
            <input
              id="location"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Location"
              {...register("location", {
                required: "La ubicación es obligatoria",
              })}
            />
          </div>

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

          {/* Confirmación de contraseña */}
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="confirmPassword">
              Password (Again):
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Password (Again)"
              {...register("confirmPassword", {
                required: "La confirmación de la contraseña es obligatoria",
              })}
            />
          </div>

          {/* Botón de registro */}
          <div className="md:col-span-2">
            <input
              type="submit"
              className="w-full flex justify-center bg-indigo-700 hover:bg-indigo-800 p-3 text-white font-bold text-lg cursor-pointer rounded"
              value="Registrar Empleado"
            />
          </div>
        </form>
      </div>
    </>
  );
}
