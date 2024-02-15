import { useForm } from "react-hook-form";

import "../App.css";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/products/Actions";
const AddProducts = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
     dispatch(addProducts(data)) 

  };

  return (
    <div className="formContainer">
      <h4 className="formtitle">Add new product!</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-4 text-[#534f4f] bg-white "
      >
        <div className="space-y-2 w-100">
          <label>Product Name</label>
          <input
            {...register("name", { required: true })}
            className="addProductinput bg-inherit"
            type="text"
            placeholder="product name"
            name="name"
            id="name"
          />
          {errors.name && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>
        <div className="space-y-2 mt-3 w-100">
          <label>Category</label>
          <select
            className="bg-inherit addProductinput py-2"
            name="category"
            id="category"
            {...register("category", { required: true })}
          >
            <option>select a category</option>
            <option value="cloth">Cloth</option>
            <option value="shose">Shose</option>
            <option value="bags">Bags</option>
          </select>
          {errors.category && (
            <span className=" text-red-600">This field is required</span>
          )}
        </div>
        <div className="space-y-2 mt-3 w-[100%] ">
          <label>Image URL</label>
          <input
            {...register("url", { required: true })}
            className="addProductinput bg-inherit"
            type="url"
            name="url"
            id="url"
          />
        </div>
        {errors.url && (
          <span className=" text-red-600">This field is required</span>
        )}
        <div className=" flex items-center justify-between flex-nowrap gap-3 ">
          <span className="space-y-2 mt-3 ">
            <label className="">Price</label>
            <input
              {...register("price", { required: true })}
              className="addProductinput  bg-inherit "
              type="number"
              name="price"
              id="price"
            />
          </span>
          <span className="space-y-2 mt-3 ">
            <label>Quantity</label>
            <input
              {...register("quantity", { required: true })}
              className="addProductinput bg-inherit  "
              type="number"
              name="quantity"
              id="quantity"
            />
          </span>
          
        </div>
        {errors.price && (
            <span className=" text-red-600">This field is required</span>
          )}
        <button type="submit"  className="submit bg-indigo-700 text-white hover:bg-indigo-500 ">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
