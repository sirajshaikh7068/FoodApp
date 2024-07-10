import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD

import { incrementItem, decrementItem, clearCart } from "../utils/cartSlice";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ADD_ITEM_URL } from "../utils/constants";
=======
import { Link, useLocation } from "react-router-dom";
import { ADD_ITEM_URL } from "../utils/constants";
import { addItem, decreamentItem, clearCart } from "../utils/cartSlice";
>>>>>>> 619e2c9d4daca29319026a4a0a8cfefe230d24ec

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleAddFoodItem = (item) => {
    disptach(addItem(item));
  };
  const handleDecreamentFoodItem = (item) => {
    disptach(decreamentItem(item));
  };

  const getItemCount = (item) => {
    const currentItem = cartItems.find((cartItem) => item.id === cartItem.id);
    return currentItem ? currentItem.quantity : 0;
  };

  const getTotal = () => {
    const total = cartItems.reduce(
      (sum, current) => sum + current?.card?.info?.price * current.quantity,
      0.0
    );
    console.log(total);
    return total;
  };

  const handleClearCart = () => {
    disptach(clearCart());
  };

  const url = useLocation();

  return (
<<<<<<< HEAD
    <section className="md:flex md:justify-center  w-4/5 mx-auto md:my-5 pb-44 fmd:flex-wrap gap-5">
      <div className="md:w-1/2 w-full">
        {cartItems.length < 1 ? (
          <div>
            <h1 className="text-center font-bold">
              Your Cart Is Empty Plz Add items
            </h1>
          </div>
        ) : (
          <div className="flex justify-between py-2 my-2 text-lg items-center ">
            <p className="">Your Cart</p> <hr className="" />
            <button
              disabled={cartItems.length > 0 ? false : true}
              className="text-normal bg-red-500 text-white px-2 py-1"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        )}
        <hr className="my-2 border-gray-200 border-2" />
=======
    <div
      className={` ${
        0 && !cartItems.length && "hidden"
      } w-fit h-fit m-8 p-8 bg-white shadow-md font-poppins text-sm flex flex-col`}
    >
      <div className="flex justify-between mb-5 border-b-2 ">
        <div className="flex w-full pb-2 justify-between items-center">
          <span className="font-bold ">cart items</span>
          <button
            className=" font-poppins bg-slate-900 px-2 py-1 text-white"
            onClick={handleClearCart}
          >
            {" "}
            Clear Cart
          </button>
        </div>
      </div>
      <div className="border-b-2">
>>>>>>> 619e2c9d4daca29319026a4a0a8cfefe230d24ec
        {cartItems.map((item) => {
          console.log(item);
          console.log(item?.card?.info?.price);
          return (
            <div
              key={item.id}
              className="pl-2 pb-2 flex justify-between items-center gap-1 my-2 "
            >
              <img
                className="w-12"
                src={ADD_ITEM_URL + item?.imageId}
                alt=""
                onError={(event) => (event.target.style.display = "block")}
              />
<<<<<<< HEAD
              <div className="md:w-1/3 text-md ">
                <p className="font-bold">{item?.card?.info?.name}</p>

                <p className="">
                  Rs.
                  {item?.card?.info?.defaultPrice / 100 ||
                    item?.card?.info?.price / 100}
                </p>
                <p className="my-2 font-bold text-lg">
                  Total price:
                  {(item.itemCount * item?.card?.info?.price ||
                    item?.card?.info?.defaultPrice) / 100}
                </p>
              </div>
              <div>
                <button
                  className="bg-gray-900 text-white px-2"
                  onClick={() => dispatch(decrementItem(item))}
                >
=======
              <div className="w-24 ">{item?.card?.info?.name}</div>
              <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
                <button onClick={() => handleDecreamentFoodItem(item)}>
>>>>>>> 619e2c9d4daca29319026a4a0a8cfefe230d24ec
                  -
                </button>
                <span>{getItemCount(item)}</span>
                <button onClick={() => handleAddFoodItem(item)}>+</button>
              </div>
              <div className="w-14 font-medium flex justify-center">
                <span>&#8377;{item?.card?.info?.price / 100}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-2 font-bold">
        <span>Total</span>
        <span>&#8377;{(getTotal() + 0.0) / 100}</span>
      </div>
      {url.pathname !== "/checkout" && (
        <Link to={"/checkout"}>
          <button className="font-poppins bg-slate-900 mt-4 p-2 text-white w-full">
            Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
