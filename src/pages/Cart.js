import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Cart = (title) => {
  useTitle(title)
  const cartItems = useSelector(state=> state.cartState.cartList);
  const total = useSelector(state=> state.cartState.total);
  const [viewItems,setViewItems]=useState(false);

  useEffect(() =>{
    const count_items= cartItems.length

    if (count_items===0) {
      setViewItems(false);
    } else {
      setViewItems(true);
    }

  },[cartItems]);


  return (
    <main className="w-4/5 dark:text-white ">
      {viewItems?(

          <div>
          <div className="flex font-bold justify-center underline decoration-2 underline-offset-8 my-10 text-2xl dark:text-white">
            <p>My Cart({cartItems.length})</p>
          </div>

          {cartItems && cartItems.map(item=>(
              <div key={item.id} >
                <CartCard item={item} />
              </div>
          ))}

          <div className="flex justify-between flex-wrap font-bold text-start my-10">
              <p>Total Amount:</p>
              <p>$ {total} </p>
          </div>
            <hr />
          <Link to="/payment" className="flex justify-end text-start my-10">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">PLACE ORDER</button>
          </Link>
          </div>



      ): (
        <div className="flex flex-col justify-center text-center border p-5 " >
          <div>
              <i className='fas fa-shopping-cart text-6xl text-green-500' > </i> 
          </div>

          <div className="my-10 text-2xl" >
            <p>Oops! Your cart looks empty!</p>
            <p>Add eBooks to your cart from our store collection.</p>
          </div>

          <Link to='/ebooks'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue Shopping <i className='fas fa-shopping-cart text-white' > </i> </button>
          </Link>
          
        </div>
      )}




    </main>
  )
}
