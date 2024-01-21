
import { useState } from 'react';
import ItemCategory from './ItemCategory';

const RestaurantCategory = ({data,showItems,setshowitem,setshowIndex,dummy}) => {

  const [showdata,setshaowdata]=useState(false)

  const handleClick=()=>{
    setshowIndex()
    
    
    }

  return (
    <div className='bg-gray-200 shadow-2xl h-auto my-2 w-6/12 p-2 mx-auto  '>
        <div className='flex cursor-pointer justify-between font-semibold' onClick={handleClick}>
        <span>{data.title} ({(data.itemCards.length)})</span>
        <span>🔽</span>
        </div>
        <div> 
          
           {showItems&& < ItemCategory items={data.itemCards} dummy={dummy} /> }

          
        </div>

    </div>
  )
}

export default RestaurantCategory;