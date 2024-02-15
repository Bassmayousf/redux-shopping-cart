/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromeCart } from "../redux/carts/CartAction";
import { addQuantity, removeQuantity } from "../redux/products/Actions";

const CartItems = ({ product }) => {
  const { id, price, quantity, url, name, category,productId } = product;
  const dispatch = useDispatch()
  // const handleIncreaseQuantity =()=>{
  //   dispatch( addQuantity(productId,quantity))
  // }
  const handleRemoveFromCart = () => {
    dispatch(removeFromeCart(id));
    dispatch(addQuantity(productId, quantity));
    console.log(product)

  };
  
  if (quantity === 0) {
    handleRemoveFromCart();
  }
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };

  
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(productId,1));
  }


  return (
    <tr>
      <td id={id}>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="badge badge-accent">{price * quantity}$</div>
      </td>
      <td>
        <div>
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleDecreaseQuantity}
            >
              -
            </span>
            <input
        
              className="h-7 w-8 border bg-white  ps-3  text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleIncreaseQuantity}
            >
              +
            </span>
          </div>
        </div>
      </td>
      <th>
        <button className="btn btn-error btn-sm" onClick={handleRemoveFromCart}>delete</button>
      </th>
    </tr>
  );
};

export default CartItems;
