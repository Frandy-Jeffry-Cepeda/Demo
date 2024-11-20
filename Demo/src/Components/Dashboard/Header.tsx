import { UserCircle } from "lucide-react";
import Nav from "./Nav";
import Logo from "../Logo";

export default function Header() {
  
  return (
    <div className="flex items-center bg-white shadow-2xl py-5 px-10 md:py-6 md:px-12">
      <div className="flex items-center gap-3">
        <Logo/>
        <h2 className="font-semibold text-2xl">LeanIX</h2>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-center gap-4">
        <Nav/>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-end items-center gap-3">
        <button
          className="text-xl bg-blue-600 text-white py-2 px-4 
          rounded-md hover:bg-blue-700 focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Get started"
        >
          Get started
        </button>
        <UserCircle className="text-gray-500 w-12 h-12"/>
        <span className="text-gray-500 text-xl">EN</span>
      </div>

    </div>
  )
}
