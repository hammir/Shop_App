// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';


const Product = ({post}) => {

  const dispatch = useDispatch();

  const AddtoCart = () => {
    dispatch(add(post));
    toast.success("item added successfully");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item removed successfully");
  }


  const{cart} = useSelector((state)=> state);
// const[selected,setSelected]=useState(false);
  return (
    <div className='flex flex-col items-center justify-between 
    hover:scale-110 transition duration-150 
    ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
    
    <div>
      <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
        {post.title}
      </p>
    </div>

    <div>
      <p className='w-40 text-gray-700 font-normal text-[10px] text-left'>
        {post.description.split(" ").slice(0,10).join(" ") + "..." }
      </p>
    </div>

<div className='h-[180px] '>
  <img src={post.image} alt='' loading='lazy' className='h-full w-full '></img>
</div>

<div className='flex justify-between gap-12 items-center w-full mt-5'>

<div>
  <p className='text-green-600 font-semibold '>${post.price}</p>
</div>

{
   cart.some((p)=> p.id === post.id) ? 
   (<button 
   className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
    onClick={removeFromCart}>Remove&nbsp;Item</button>) :

   (<button
   className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
    onClick={AddtoCart}>Add&nbsp;to&nbsp;Cart</button>)
}

</div>



    </div>
  )
}

export default Product