/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromeCart } from '../redux/carts/CartAction';
import { addQuantity, removeQuantity } from '../redux/products/Actions';

const ProducItems = ({ product}) => {
  const {id , url, price ,category,name,quantity}=product
  const carts = useSelector((state)=>state.carts)
  console.log(carts)
  const dispatch = useDispatch()
  const handleaddtocart=()=>{
    dispatch(addToCart(product))
    // dispatch(addQuantity(id))
    dispatch(removeQuantity(id))
   console.log(id)
  }
  return (
    
      <div className="card md:w-86 card-normal  bg-base-100 shadow-xl">
  <figure className=' relative'>
    <img src={url} alt="Shoes"className=' h-64 w-full' />
    <div className="badge badge-secondary top-3 right-2 absolute">{category}</div>  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. nesciunt saepe dicta cumque enim.</p>
    <div className='flex justify-center'>
      <p className='w-[72%]'>avaliable :{quantity}</p>
      <p className='text-left w-[28%]'>price :{price}$</p>
    </div>
    <div className="card-actions mt-4">
      <button className="btn btn-primary" onClick={handleaddtocart}>Add To cart </button>
    </div>
  </div>
</div>
  
  );
}

export default ProducItems;
