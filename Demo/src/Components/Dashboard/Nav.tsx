import { Link } from "react-router-dom";

const navLinks = [
    { to: '/', label: 'Products' },
    { to: '/', label: 'Solutions' },
    { to: '/', label: 'Customers' },
    { to: '/', label: 'Partners' },
    { to: '/', label: 'Resources' },
    { to: '/', label: 'Company' },
  ];

export default function Nav() {
  return (
    <nav className="flex gap-10 ">
       {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="text-gray-500 text-xl"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
