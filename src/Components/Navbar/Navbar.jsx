import React from 'react';
import Links from './links';


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
    return (
      <nav>
        <ul className="flex">
          {navLinks.map((data) => (
            <Links key={data.id} data={data}></Links>
          ))}
        </ul>
        {/* <ul className="flex">
          {navLinks.map((data) => (
            <li className="ml-4" key={data.id}>
              <a href={data.path}>{data.name}</a>
            </li>
          ))}
        </ul> */}

        {/* <ul className='flex'>
                <li className='ml-4'><a href='./Home'>Home</a></li>
                <li className='ml-4'><a href='./About'>About</a></li>
                <li className='ml-4'><a href='./Contact'>Contact</a></li>
            </ul> */}
      </nav>
    );
};

export default Navbar;