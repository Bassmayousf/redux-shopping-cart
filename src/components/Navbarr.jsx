import { useDispatch, useSelector } from "react-redux";

const Navbarr = () => {
  const carts = useSelector((state)=>state.carts);
  const dispatch = useDispatch()
  const handlePageChange = (type)=>{
    dispatch({
      type,
    })
  }
  const calcCarItems = carts.reduce((total,product)=> total + product.quantity,0)
  return (
    <nav className="text-white bg-indigo-900">
      <div className="navbar   mx-auto max-w-7xl ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ShoppingCart</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
    <a className="btn btn-ghost text-sm " onClick={()=>handlePageChange("HOME")}>Home</a>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"
      onClick={()=>handlePageChange("CART")}
      >
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item bg-white text-black ">{calcCarItems}</span>
        </div>
      </div>
    
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-gray-800 ">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </nav>
  );
}

export default Navbarr;
