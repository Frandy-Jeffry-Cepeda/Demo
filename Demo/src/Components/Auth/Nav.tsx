import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <>
        <div className= 'px-10 pb-8 py-8'>
            <div>
                <p className="text-xl">
                    Before signing up, please read the 
                    <span className='text-blue-700'> Membership and Use Agreement </span>
                    and the <span className='text-blue-700' >accept them below.</span>
                </p>
            </div>

            <nav className="flex gap-1 pt-6 mx-auto justify-center text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                
                <Link 
                    to='/login'
                    className="text-blue-700 hover:underline"
                >
                    Sign In
                </Link>
                    <span className="text-gray-400"> | </span>
                <Link 
                    to='/register'
                    className="hover:underline"
                >
                    Sign Up
                </Link>
                
            </nav>
        </div>
    </>
  )
}
