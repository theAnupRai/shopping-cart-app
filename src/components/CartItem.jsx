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
      <div>
        <div>
          <img src={item.image} alt="image of item in cart" />
        </div>

        <div>
          <h2>{item.title}</h2>
          <h2>{item.description}</h2>
          <div>
            <p>{item.price}</p>
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
