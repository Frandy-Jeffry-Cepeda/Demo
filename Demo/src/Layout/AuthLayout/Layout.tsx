import { Outlet } from 'react-router-dom';
import Header from '../../Components/Auth/Header';
import Nav from '../../Components/Auth/Nav';

export default function Layout() {
  return (
    <div className="w-full flex flex-col">
      <header>
        <Header />
      </header>
      <div className="">
        <Nav />
        <main className="bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
