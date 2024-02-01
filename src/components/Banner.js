import { Link } from "react-router-dom"
import BannerImg from '../assets/banner.avif'

export const Banner = () => {
  return (
    <div className="flex items-center bg-whiterounded-lg dark:border-gray-700 dark:bg-gray-800">
          
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">The Ultimate eBook Store</h5>
            <p className="mb-3 text-2xl text-gray-700 dark:text-gray-400">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <span>
                <Link to="ebooks" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore Ebooks
                </Link>
            </span>
        </div>
        <div>
            <img className="rounded-lg" src={BannerImg} alt="Banner" />
        </div>
    </div>
  )
}

