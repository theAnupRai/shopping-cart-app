import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    // toast.success("Item Removed");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between hover:scale-110 transition duration ease-in hover:shadow-md gap-3 p-4 mt-10 ml-5 rounded-xl border">
        <div>
          <img className="h-[200px]" src={item.image} alt="image of item in cart" />
        </div>

        <div>
          <h2 className="text-gray-700 font-semibold text-lg text-left truncate mt-1">{item.title}</h2>
          <h2>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h2>
          <div className="flex gap-4 items-center">
            <p>${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
