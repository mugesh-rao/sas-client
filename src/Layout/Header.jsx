import React, { useEffect, useState } from 'react'
import logo from '../asset/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [scrolling, setScrolling] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <nav
    className={`fixed w-full z-20 top-0 left-0 bg-[#3795BD] transition-all duration-500 ${
      scrolling ? 'bg-opacity-90 shadow-md' : ''
    }`}
  >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="." className="flex items-center">
      <img src={logo} className="h-12 mr-3" alt="logo"/>
     
  </a>
  <div className="flex md:order-2">
    
    <Link to="/course">
      <button type="button"  className="text-black bg-[#FFDEB4] hover:bg-[#FFDEB4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Contact Us</button>
      </Link>
      <button data-collapse-toggle="navbar-sticky" 
          
          aria-expanded={showMenu ? 'true' : 'false'} onClick={toggleMenu} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
    <Link to="/">
      <li>
        <span  className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</span>
      </li>
      </Link>
      <Link to="/course">
      <li>
        <span  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Management</span>
      </li>
      </Link>
      <Link to="/university">
      <li>
        <span  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Acadameics</span>
      </li>
      </Link>
      <li>
        <span  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white d dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News & Events</span>
      </li>
      <Link to="/university">
      <li>
        <span  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</span>
      </li>
      </Link>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Header