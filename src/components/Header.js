import { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'


export const Header = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode'))||false);
    const [hiddenMode, setHiddenMode] = useState(true);

    useEffect(() => {
        localStorage.setItem('darkMode',JSON.stringify(darkMode))
        if (darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        
    },[darkMode])

  return (
    <nav className="bg-white py-1 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Kibs Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kibs CodeBook</span>
            </Link>
            <div className="flex items-center gap-3 dark:text-white">
                <div onClick={()=>setDarkMode(!darkMode)}>
                    <i className='fas fa-cog text-2xl' ></i>
                </div>
                
                <NavLink to="/search"><i className='fas fa-search text-2xl' ></i> </NavLink>
                <NavLink to="/cart" className="flex flex-col text-center relative">
                    <span className='p-1 rounded-full text-sm bg-red-500 absolute -top-4 -right-1'>0</span>
                    <i className='fas fa-shopping-cart text-2xl' > </i> 
                </NavLink>
                
                
                <div onClick={()=>setHiddenMode(!hiddenMode)} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <i className='fas fa-user-circle text-2xl' ></i>
                </div>
                                
            </div>
        </div>

                {/* Dropdown menu */}
        <div className={`${hiddenMode?"hidden":""} flex justify-end z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
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
    </nav>
  )
}
