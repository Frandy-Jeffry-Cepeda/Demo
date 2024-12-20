import { Outlet } from 'react-router-dom';

import Header from '../../Components/Auth/Header';
import Nav from '../../Components/Auth/Nav';

export default function AuthLayout() {
  
  return (
    <div className="w-full flex flex-col ">
      <header className='bg-white shadow-2xl py-5 px-10'>
        <Header />
      </header>
      <div>
        <Nav />
        <main className="bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
