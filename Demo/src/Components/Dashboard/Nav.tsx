import { Link } from "react-router-dom";

export const navLinks = [
    { to: '/', label: 'Products' },
    { to: '/', label: 'Solutions' },
    { to: '/', label: 'Customers' },
    { to: '/', label: 'Partners' },
    { to: '/', label: 'Resources' },
    { to: '/', label: 'Company' },
  ];

export default function Nav() {
  return (
    <nav className="flex gap-10 md:text-base xl:text-2xl ">
       {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="text-gray-500"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
