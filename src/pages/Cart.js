import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components"
import { useSelector } from "react-redux"

export const Cart = (title) => {
  useTitle(title)
  const cartItems = useSelector(state=> state.cartState.cartList);
  const total = useSelector(state=> state.cartState.total);
  return (
    <main className="mx-10 dark:text-white ">
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
      <div className="flex justify-end text-start my-10">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">PLACE ORDER</button>
      </div>

    </main>
  )
}
