import React from 'react'
import Header from '../component/Header'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slice/basketSlice';
import CheckOutProduct from '../component/CheckOutProduct';
import { useFirebase } from '../context/firebase'
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
  const firebase=useFirebase()
  const total=useSelector(selectTotal)
  const navigate=useNavigate()

  const items=useSelector(selectItems)

  const buyNowButton=()=>{
    if(firebase.userName){

    }
    else{
      navigate('/signin')
    }
  }
  
  return (
    <div className='bg-gray-100'>
      <Header/>
      <main className='lg:flex max-w-screen-xl mx-auto'>

        {/* left */}

        <div className='flex-grow m-5 shadow-sm'>
          <img src="https://links.papareact.com/ikj" 
          width={1020}
          height={250}
          style={{ objectFit: 'contain' }}
          alt="" />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
              ? 'Your Amazon Cart is empty.'
              :'Your Amazon Cart'}
            </h1>

              {items.map((item, i) =>(
                <CheckOutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image = {item.image}
                  rating={item.rating}
                  description={item.description}
                  category={item.category}
                  hasPrime={item.hasPrime}
                />
              ))}
          </div>

        </div>


        {/* right */}

        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length>0 && (
            <>
            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
            <span className='font-bold'>
             &nbsp; ${total}
            </span>

            </h2>
            <button
            className='button mt-3'
            onClick={buyNowButton}
            >
              {firebase.userName ? 'Buy Now' : 'Sign in to Buy'}
            </button>
            </>
          )}
        </div>




      </main>
        
    </div>
  )
}

