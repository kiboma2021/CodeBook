import { Link } from "react-router-dom"

export const UnAuthenticatedUser = ({setHiddenMode,hiddenMode}) => {
  return (
    <div
    className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg"
    role="menu"
>
        <div className="p-2">
        <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            omayioben@gmail.com
        </a>
        <hr />

        <Link to="/ebooks" onClick={()=>setHiddenMode(!hiddenMode)}
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            All eBooks
        </Link>

        <Link to="/dashboard" onClick={()=>setHiddenMode(!hiddenMode)}
            href="#"
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            Dashboard
        </Link>

        <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            Logout
        </a>

        <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            Login
        </a>

        <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-300 hover:text-gray-700"
            role="menuitem"
        >
            Register
        </a>

        </div>
    </div>
  )
}
