import React from 'react'
// import { FOOD_LOGO } from '../utils/constants'

const ItemCategory = (items) => {
 
  return (
    <div>
        {items.items.map((item)=><div key={items?.card?.info?.id} className=' border-b-2   border-gray-400 '>
          <div className='flex justify-between ' >
            <div className='text-left w-8/12 p-4 '>
            <span className='font-semibold'>{item?.card?.info?.name}</span><br/>
            <span  className='font-semibold'> ₹{item?.card?.info?.defaultPrice/100 ||item?.card?.info?.price/100 }</span>
             
                <p className='text-xs'>
                  {item?.card?.info?.description}
                </p>
             
            </div>
            
            <div className='pl-52 w-96 h-28 pt-4 relative '>
            <img className= " h-20 border border-black " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId } >
            </img>
            <button className='bg-black text-white mb-6 relative bottom-4  p-1 rounded-md hover:scale-95 ' >Add+</button>
            </div>
         
          </div>
         
         
        </div>)}
    </div>

  )
}

export default ItemCategory;