import React from 'react';
import AddProducts from './AddProducts';
import { useSelector } from 'react-redux';
import ProducItems from './ProducItems';

const Home = () => {
  const products =useSelector((state) => state.products)
  console.log(products)
  return (
    <main className='max-w-7xl  py-8 px-4 mx-auto'>
      <div className='grid md:grid-cols-3  grid-cols-1 gap-8'>
        <div className=' col-span-2 '>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-6 gap-x-8 mx-auto'>








          
        {products.length > 0 ? products.map((product,i)=> {
          return (
            <ProducItems key={i} product={product}/>

          )
        }
        ):<p> no products Items</p> } 
        </div>
        </div>

        <div className='col-span-1'><AddProducts/></div>
      </div>
    </main>
  );
}

export default Home;
