import { UserCircle } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";

export default function UserNav() {
  
  return (
    <div className="flex items-center">
        <Menubar>
          <MenubarMenu>

            <MenubarTrigger>
              <UserCircle className="flex items-center text-gray-500 w-8 h-8 lg:w-[25px] lg:h-8 xl:w-10 xl:h-10"/>
            </MenubarTrigger>

            <MenubarContent className="bg-white border border-gray-300 rounded-lg shadow-lg mt-1 min-w-[200px]">

              <MenubarItem className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <Link
                      to={'/login'}
                  >
                      Sing In
                  </Link>
              </MenubarItem>

              <MenubarItem className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                  <Link
                      to={'/register'}
                  >
                      Sing Up
                  </Link>
              </MenubarItem>

            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    </div>
  )
}

