import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const Links = navLinks.map((data) => <Link key={data.id} data={data}></Link>);

    return (
      <nav className="flex justify-between p-4">
        <span className="flex gap-1 " onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
          <ul className='md:hidden'>{Links}</ul>

          <h3>My Navbar</h3>
        </span>

        <ul className="md:flex hidden">{Links}</ul>
        <p>Signin</p>
      </nav>
    );
};

export default Navbar;