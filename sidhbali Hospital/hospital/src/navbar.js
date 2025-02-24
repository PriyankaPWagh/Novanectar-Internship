import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar(){
  return (
    <header className="bg-blue-200 text-green-600/100 dark:text-green-400/100 text-center text-2xl font-bold flex justify-around items-center header  ">
            <div className="flex items-center gap-2">
              <img src="media\assets\logo-min.png" className="h-40" alt="logo" />
            </div>
            <div  >
                <ul className="flex   items-center  gap-[50px]">
                 
                  <li >
                    <Link   to="/">
                   Home
                    </Link >
                  </li>
                  <li >
                    <Link   to="/about">
                 About us
                    </Link >
                  </li>
                  <li >
                    <Link   to="/services">
                  Services
                    </Link >
                  </li>
                  <li >
                    <Link   to="/contact">
                Contact us
                    </Link >
                  </li>
                 
                 
                  
                </ul>
               
              </div>
          </header>
  );
}