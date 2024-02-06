import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const CartCard = ({item}) => {

    const { image, title,price}=item;
    const dispatch = useDispatch();
    
  return (
    <div>
        <div className="flex justify-between flex-wrap text-start m-5">
            <div className="flex flex-wrap gap-3">
                <div className="w-40" >
                    <img src={image} alt={title} />
                </div>
                <div>
                    <p>{title}</p>
                    <p className="text-red-500" onClick={()=>dispatch(remove(item))}  >Remove</p>
                </div>
            </div>
            <div>
                <p>${price}</p>
            </div>
        </div>

        <hr />
      
    </div>
  )
}

