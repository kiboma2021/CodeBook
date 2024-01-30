import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">CodeBook</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6"><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6"><i class="fa-brands fa-square-github"></i></a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

