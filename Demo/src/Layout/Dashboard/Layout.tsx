import { Outlet } from "react-router-dom"
import Header from "../../Components/Dashboard/Header"

export default function Layout() {
  return (
    <div>
        <header className="w-full">
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
