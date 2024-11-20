import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <>
        <div className= 'px-10 pb-8 py-8'>
            <div className="">
                <p className="">
                    Before signing up, please read the <span className='text-blue-700'>Membership and Use Agreement </span>
                    and the <span className='text-blue-700' >accept them below.</span>
                </p>
            </div>

            <nav className="flex gap-1 pt-6 text-3xl mx-auto w-3/4">
                <Link 
                    to='/login'
                    className="text-blue-700"
                >
                    Sign In
                </Link>
                    <span className="text-gray-400"> | </span>
                <Link 
                    to='/register'
                >
                    Sign Up
                </Link>
            </nav>
        </div>
    </>
  )
}
