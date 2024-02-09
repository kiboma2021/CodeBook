import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import BookImg from '../assets/book.avif'
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../store/cartSlice";

export const BookDetail = () => {
  const params = useParams();
  
  const [book,setBook] = useState({})

  useEffect(()=>{
    const fetchBook = async() => {
      const response = await fetch(`http://localhost:8000/books/${params.id}`);
      const result = await response.json();
      setBook(result);
    }
    fetchBook();
  },[params.id])

  const cartItems = useSelector(state => state.cartState.cartList);
  const dispatch = useDispatch();
  const [inCart,setInCart] = useState(false);

  useEffect(()=>{
    const productInCart=cartItems.find(item => item.id === params.id)

    if(productInCart){
      setInCart(true);
    } else {
      setInCart(false);
    }

  },[cartItems,params.id])

  const rattingArray = Array(5).fill(false);
  for (let i = 0; i < book.rating; i++) {
    rattingArray[i] = true;
  }


  return (
    <main className="flex justify-center dark:text-white " >

      <div className="flex flex-col text-center  " >
        <div>
          <p className="font-bold text-4xl my-2" >{book.title}</p>
          <p className="text-xl my-5">{book.description}</p>
        </div>

        <div className="flex flex-wrap justify-center text-center gap-3">
          <img className="rounded-xl" src={book.image} alt={BookImg} />
          <div className="flex flex-col flex-wrap items-start gap-3 ml-5" >
            <p className="text-2xl">$ {book.price}</p>
            <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  { rattingArray && rattingArray.map(val=>(
                    val?(
                      <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ):(
                      <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    )
                  ))}
                </div>
            </div>
            <div className="my-5">
              {book.best_seller ? (<span className="bg-slate-100 text-yellow-600 p-3 m-3 font-bold rounded-xl">BEST SELLER</span>):null}
              {book.in_stock ? (<span className="bg-slate-100 text-green-600 p-3 m-3 font-bold rounded-xl" >INSTOCK</span>):null}
              <span className="bg-slate-100 text-blue-600 p-3 m-3 font-bold rounded-xl">{book.size}MB</span>
            </div>
            {inCart?(
                <span onClick={()=>dispatch(remove(book))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove from Cart</span> 
                ):(
                    <span onClick={()=>dispatch(add(book))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</span>
                 )  }
                
            <div className="w-full max-w-xl mx-auto">
              <p className="text-lg">{book.summary}</p>
            </div>
            
          </div>


        </div>




      </div>



    </main>
  )
}











