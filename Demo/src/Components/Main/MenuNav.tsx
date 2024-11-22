import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { navLinks } from "./Nav";

export default function MenuNav() {

  return (
    <div className="relative">
      <Menubar>
        <MenubarMenu>

          <MenubarTrigger className="flex items-center p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <MenuIcon className="w-6 h-6" />
          </MenubarTrigger>

          <MenubarContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-1 min-w-[200px]">
              {navLinks.map((link, index) => (
                <MenubarItem
                key={index} 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <Link to={link.to}>{link.label}</Link>
                </MenubarItem>
              ))}
          </MenubarContent>
          
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
