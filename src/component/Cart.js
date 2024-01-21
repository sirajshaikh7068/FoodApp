
import { useDispatch, useSelector } from 'react-redux'
import { clearItem } from '../utils/cartSlice'
import ItemCategory from './ItemCategory'



const Cart = () => {

  

 const cartItems =useSelector((store)=>store.cart.items)

 const dispatch=useDispatch();

  const handleClearItem=()=>{
    console.log("clicked")
    dispatch(clearItem());
  }

  return (
    <div className=' text-center p-4 m-4'>
      <h1 className=' text-lg font-bold'>Cart</h1>
      <div className='w-8/12 mx-auto my-4  text-center '>
      <button className=' p-2 bg-black text-white rounded' onClick={handleClearItem}>Clear Cart</button>     

      {cartItems.length ===0 && <h1>Add items</h1>}

        <ItemCategory items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart