import { useEffect } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const Sidebar = ({sideOpen, setSideOpen}) => {
    const handleSide = () => setSideOpen(!sideOpen)
    const cartItem = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.price)

    const dispatch = useDispatch()

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
        toast.success('Item removed from cart')
    }

  return (
    <>
    {sideOpen ? 
    <div className='w-full h-full absolute z-50 bg-black bg-opacity-40'>
    <div className='bg-white w-full h-screen fixed top-0 right-0 md:w-[70%] lg:w-[41%] flex items-center flex-col p-5 z-50 rounded-l-lg'>
        <div className='w-full flex items-center justify-between p-3 border-b border-e-neutral-300 text-grayLight'>
            <p>Shopping Cart</p>
            <IoClose onClick={handleSide} size={25} className='cursor-pointer hover:scale-110 transition-transform duration-300'/>
        </div>

        <div className='w-full h-[80vh] overflow-y-scroll'>
            {cartItem.map((item,index) => (
            <div className='w-full h-[91px] flex justify-between items-center' key={index}>
                <div className='flex gap-3'>
                <img src={item.imgUrl} alt=""
                className='h-[50px] w-[50px]' />
                <div>
                    <p className='text-[18px]'>{item.name}</p>
                    <p className='text-grayLight text-[16px]'>
                        <span>{item.quantity}</span>
                        <span className='text-[10px]'>X </span>
                        <span>${item.newPrice}</span>
                    </p>
                </div>
                </div>
                <div className='w-7 h-7 flex items-center justify-center hover:bg-neutral-200 cursor-pointer hover:scale-125 transition-transform duration-700 border-neutral-500 border rounded-full mr-5' onClick={() => handleRemoveFromCart(item.id)}>
                <IoClose />
                </div>
            </div>
            ) )}
            
            {/* <p className='text-grayLight'>No Product in the cart.</p> */}
        </div>

        <div className='w-[90%] h-[60px] mb-5 border-y border-neutral-300 flex'>
            <p className='w-full flex justify-between items-center text-[18px]'>
                <span>Subtotal:</span>
                <span>${totalPrice}</span>
            </p>
        </div>

        <div className='w-full flex items-center justify-center flex-wrap gap-3'>
            <Link to='/cart' className='w-[90%]' onClick={()=> handleSide()}>
                <button className='border border-primary w-full py-3 hover:bg-primary hover:text-white duration-500'>View cart</button>
            </Link>
            <Link to='/payment/checkout' className='w-[90%]' onClick={()=> handleSide()}>
                <button className='border border-primary w-full py-3 hover:bg-secondary hover:text-white duration-500'>Checkout</button>
            </Link>

            {/* <Link
            className='w-[90%]'
            to='/books'>
            <button className='border border-secondary w-full py-3 hover:bg-secondary hover:text-white duration-500'>Continue Shopping</button>
            </Link> */}
        </div>


    </div>
    </div>
    : ''}
    </>
  )
}

export default Sidebar