import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'
import { useEffect, useState } from 'react'

export const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        
    },[darkMode])


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Kibs Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kibs CodeBook</span>
            </Link>
            <div className="flex items-center gap-3">
                <div onClick={()=>setDarkMode()}>

                </div>
                <i className='fas fa-cog text-2xl' ></i>
                <NavLink to="/search"><i className='fas fa-search text-2xl' ></i> </NavLink>
                <NavLink to="/cart"><i className='fas fa-shopping-cart text-2xl' ></i> </NavLink>
                
                
                
                

                <div id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <i className='fas fa-user-circle text-2xl' ></i>
                </div>

                {/* Dropdown menu */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
