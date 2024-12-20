import Logo from "../Logo";
import Nav from "./Nav";
import UserNav from "./UserNav";
import MenuNav from "./MenuNav";


export default function Header() {
  
  return (

    <div className="flex items-center bg-white shadow-2xl">
      <div className="flex items-center py-2 mx-5 gap-2 md:mx-5">
        <Logo/>
        <h2 
          className="font-semibold 
            text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-3xl">
            LeanIX
        </h2>
      </div>

      <div className="flex-grow" />

      <div className="gap-4 hidden sm:hidden lg:flex">
        <Nav/>
      </div>

      <div className="flex-grow" />

      <div className="justify-end items-center gap-3 lg:mx-5 flex sm:flex">
        <button
          className="bg-blue-600 text-white my-4 px-[10px] py-2 xl:px-6 xl:py-4 hidden sm:flex"
          aria-label="Get started"
        >
          Get started
        </button>
          <UserNav/>
        <span className="relative bottom-1 text-gray-500 text-2xl lg:text-2xl xl:text-3xl">EN</span>
      </div>

      <div className="flex justify-end items-center mx-5 lg:mx-0 lg:hidden">
          <MenuNav/>
      </div>

    </div>

    
  )
}
