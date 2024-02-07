import { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'
import { useSelector } from 'react-redux';


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

    const cartItems = useSelector(state=> state.cartState.cartList);
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
                    <span className='p-1 rounded-full text-sm bg-red-500 absolute -top-4 -right-1'>{cartItems.length}</span>
                    <i className='fas fa-shopping-cart text-2xl' > </i> 
                </NavLink>
                
                
                <div onClick={()=>setHiddenMode(!hiddenMode)} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <i className='fas fa-user-circle text-2xl' ></i>
                </div>

                {/* Dropdown menu */}
                <div className={`${hiddenMode?"hidden":""} relative mt-10`}>
            <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
            >
                <div className="p-2">
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    View on Storefront
                </a>

                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    View Warehouse Info
                </a>

                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Duplicate Product
                </a>

                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Unpublish Product
                </a>
                </div>

                <div className="p-2">
                 <p>dhdshjfebj</p>
                </div>
            </div>
                </div>              
            </div>
        </div>
    </nav>
  )
}
