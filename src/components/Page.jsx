import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';
import MyCarts from './MyCarts';

function Page() {
  const pages =useSelector((state )=>state.pages)
  return (
    <div>
    
      {
        pages.home ? <MyCarts/>:<Home/>
      }
    </div>
  );
}

export default Page;
