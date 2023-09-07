import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { primeLogo } from '../asset'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slice/basketSlice'

function CheckOutProduct({
    id,
    title,
    price,
    image,
    rating,
    description,
    category,
    hasPrime,
}) {
    const dispatch=useDispatch()

    const addItemToBasket = () => {
        const product={
            id,
            title,
            price,
            image,
            rating,
            description,
            category,
            hasPrime,
        }
        dispatch(addToBasket(product))
    }

    const removeItemsFromBasket = () => {
        dispatch(removeFromBasket(id))
    }

  return (
    <div className='grid grid-cols-5'>
        <img 
        className='h-44 w-44'
        src={image} 
        style={{objectFit:'contain'}} 
        alt="" />

        {/* middle */}

        <div className='col-span-3 mx-5 '>
            <p className='font-semibold'>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon key={i} className='h-5 text-yellow-500'/>
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>

            <p>$ {price}</p>

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img 
                    loading='lazy'
                    className='w-12'
                    src={primeLogo} alt="" />

                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}

        </div>

        <div className='flex flex-col space-y-2 justify-self-end'>
        <button onClick={addItemToBasket} className='button'>Add to basket</button>
        <button onClick={removeItemsFromBasket} className='button'>Remove from basket</button>
        </div>

       
    </div>
  )
}

export default CheckOutProduct