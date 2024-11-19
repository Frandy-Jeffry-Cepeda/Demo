import { Outlet } from 'react-router-dom';
import Header from '../../Components/Auth/Header';
import Nav from '../../Components/Auth/Nav';


export default function Layout() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <Nav/>
      <main className='bg-gray-300 min-h-screen min-w-full'>
        <Outlet />
      </main>
    </div>
  );
}
