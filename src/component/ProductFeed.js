import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { primeLogo } from '../asset';



const ProductCard=({title,price,image,description,category})=>{
  const [rating]=useState(
    Math.floor(Math.random()*(5-2+1))+2
  )

  const [hasPrime]=useState(Math.random()<0.5)



  return(
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 text-left'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <div className='flex justify-center'>
        <img src={image} className='h-40' objectFit='contain' alt="" />
      </div>
      
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_,i)=>(
            <StarIcon className='flex text-yellow-500' fontSize='small'/>
          ))
        }
      </div>

      <p className='text-xs my-2 line-clamp-3'>{description}</p> 

      <div className='mb-5'>
        $ {price}
      </div>


      {hasPrime && (
        <div className='flex items-center space-x-2 mt-5'>
          <img className='w-12' src={primeLogo} alt="" />
          <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add to cart</button>

    </div>
  )
}

function ProductFeed() {
  const [productData,setProductData]=useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setProductData(res.data)
    })
  },[])

  return (
    <div 
    className='bg-slate-200 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'
    >
      {productData
      .slice(0,4)
      .map((product,index)=>{
        return(
        <ProductCard             
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        description={product.description}/>
        )
      })}

      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />

      <div className='md:col-span-2'>
      {productData
      .slice(4,5)
      .map((product,index)=>{
        return(
        <ProductCard             
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        description={product.description}/>
        )
      })}
      </div>


      {productData
      .slice(5,productData.length)
      .map((product,index)=>{
        return(
        <ProductCard             
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        description={product.description}/>
        )
      })}

    </div>
  )

  
}

export default ProductFeed