import Logo from "../Logo";

export default function Header() {

  return (
    <div>
        <h1 className=" flex items-center font-semibold text-[16px] sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl">
          <Logo/>
          <span className='font-bold mx-2'>LeanIX</span>
            Partner Academy
        </h1>
    </div>
  )
}
