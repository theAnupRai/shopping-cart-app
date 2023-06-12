import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-14 p-4 mt-6 ml-5 rounded-xl">
          <div className="basis-1/2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="mt-20">
            <div>
              <div className="text-gray-700 font-semibold text-lg truncate mt-1 basis-1/2">Your cart</div>
              <div className="text-gray-700 font-semibold text-lg truncate mt-1 basis-1/2">Summary</div>
              <p>
                <span className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 basis-1/2">Total Items : {cart.length} </span>
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold text-lg text-left mt-1 basis-1/2"> Total Amount : ${totalAmount} </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 p-4 mt-10 ml-5">
          <h2>Cart Empty</h2>
          <Link to={"/"}>
            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 uppercase text-[12px] hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
