import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import Billing from './Biling';

const MyCarts = () => {
  const carts = useSelector((state)=>state.carts)
  console.log(carts)
  return (
    <div className=' max-w-7xl mx-auto py-8 px-4 container'>
      <h2 className='mb-4 font-bold text-xl'>Shopping Cart </h2>
      <div className='mb-8'>
        <div>
        <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Details</th>
            <th>Price</th>
            <th>num of items</th>
          </tr>
        </thead>
        <tbody>
        
          {carts.length?(carts.map((p)=>  <CartItems product={p} key={p.id} />)):<p className=' text-yellow-500 pt-6 ' >no product items</p>}
          </tbody>
    
    </table>
  </div>
        </div>
        
      </div>
      <Billing/>
    </div>
  );
}

export default MyCarts;
