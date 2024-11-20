import { useForm } from "react-hook-form";
import { DraftUserAuth } from "../../types";
import { useDispatch } from "react-redux";
import { createAccount } from "../../services/AuthAPI";
import { createUser } from "../../redux/Auth/authSlice";


export default function Register() {

  const dispatch = useDispatch();
 
  const { handleSubmit, register, watch, reset, formState: { errors, isSubmitted }} = useForm<DraftUserAuth>();

  const password = watch('Password');

  const onSubmit = async (formData : DraftUserAuth) => {
    const newUser = await createAccount(formData);
    if (newUser) {
      // Si la creación fue exitosa, despacha la acción para agregar el usuario al estado
      dispatch(createUser(newUser));
      reset();
    } else {
      console.error('Error al crear la cuenta');
    }
    reset()
  }

  return (
    <>
      <div className="mx-10 sm:mx-40 lg:mx-40 max-w-full p-2 sm:p-10">
        <form 
          className="md:grid-cols-2 gap-6 mt-10" 
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          
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
                {...register("FirstName", {
                  required: "El primer nombre es obligatorio",
                })}
              />
              { isSubmitted && errors.FirstName && <p className="text-red-600">{errors.FirstName.message}</p>}
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
                {...register("LastName", {
                  required: "El apellido es obligatorio",
                })}
              />
              { isSubmitted && errors.LastName && <p className="text-red-600">{errors.LastName.message}</p>}
            </div>
          </div>

          {/* Nombre de la empresa */}
          <div className="mb-4">
            <div className="flex flex-col">
              <label className="text-gray-800" htmlFor="companyName">
                Company Name:
              </label>
              <label className="relative -bottom-[6px] text-sm leading-none">
                The organization that you are working
              </label>
            </div>
            <input
              id="companyName"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="Company Name"
              {...register("CompanyName", {
                required: "El nombre de la empresa es obligatorio",
              })}
            />
            { isSubmitted && errors.CompanyName && <p className="text-red-600">{errors.CompanyName.message}</p>}
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
              {...register("Location", {
                required: "La ubicación es obligatoria",
              })}
            />
            {isSubmitted && errors.Location && <p className="text-red-600">{errors.Location.message}</p>}
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
              {...register("Email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
            { isSubmitted && errors.Email && <p className="text-red-600">{errors.Email.message}</p>}
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
              {...register("Password", {
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
            { isSubmitted && errors.Password && <p className="text-red-600">{errors.Password.message}</p>}
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
              {...register("PasswordConfirm", {
                required: "La confirmación de la contraseña es obligatoria",
                validate: value => value === password || 'Los Passwords no son iguales'
              })}
            />
            { isSubmitted && errors.PasswordConfirm && <p className="text-red-600">{errors.PasswordConfirm.message}</p>}
          </div>

          <div className="mb-4">
              <input 
                id="checkbox"
                type="checkbox" 
                {...register("CheckBox", {
                  required: "Los términos son obligatorios",
                })}
              />
              <label 
                htmlFor="TermsNConditions"
                className="mx-2"
              >
                Terms and Conditions
              </label>
              {errors.CheckBox && <p className="text-red-600">{errors.CheckBox.message}</p>}
              <label className="flex text-sm leading-none">
                I accept the Membership and Use Agreement and the Privacy Policy.
              </label>
          </div>

          {/* Botón de registro */}
          <div>
            <input
              type="submit"
              className="mx-auto w-full sm:w-1/2 xl:w-1/5 flex  bg-indigo-700 hover:bg-indigo-800 p-3 text-white font-bold text-lg cursor-pointer rounded"
              value="Sign Up"
            />
          </div>
      
        </form>
      </div>
    </>
  );
}
