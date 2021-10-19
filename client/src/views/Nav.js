import React from 'react';
import logo from '../asset/logo2.svg';
import { MenuItems } from './MenuItems';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Nav() {
   const {
      loginWithRedirect, 
      logout,
      isAuthenticated
   } = useAuth0();

   return (
      <nav className="flex justify-between px-8 bg-gray-950 text-white w-full">
         <div className="py-6 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="/">
               <img className="h-8" src={logo} alt="" />
            </a>
            <ul className="hidden md:flex px-8 font-semibold font-heading space-x-12">
               {MenuItems.map((item, index) => {
                  return (
                     <Link to={item.url}>
                        <li key={index}>
                           <a href={item.url} className={item.cName}>
                              {item.title}
                           </a>
                        </li>
                     </Link>
                  );
               })}
            </ul>
            <div className="hidden xl:flex items-center space-x-5 mr-0 ml-auto">
               <button className="flex items-center hover:text-gray-200" onClick={isAuthenticated ? logout : loginWithRedirect}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </button>
            </div>
         </div>
         <button className="navbar-burger self-center xl:hidden" onClick={isAuthenticated ? logout : loginWithRedirect}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         </button>
      </nav>
   );
}

export default Nav;
