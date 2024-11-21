import { UserCircle } from "lucide-react";
import Nav from "./Nav";
import Logo from "../Logo";
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
          className="bg-blue-600 text-white  my-4 px-[11px] py-2 xl:px-6 xl:py-4 hidden sm:flex"
          aria-label="Get started"
        >
          Get started
        </button>
        <UserCircle className="text-gray-500 w-8 h-8 lg:w-[25px] lg:h-8 xl:w-10 xl:h-10"/>
        <span className="text-gray-500 text-2xl lg:text-2xl xl:text-3xl">EN</span>
      </div>

      <div className="flex justify-end items-center mx-5 lg:mx-0 lg:hidden">
        <button
          type="button"
          className="font-bold"
        >
          <MenuNav/>
        </button>
      </div>

    </div>

    
  )
}
