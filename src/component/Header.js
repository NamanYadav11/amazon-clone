import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useFirebase } from '../context/firebase'
import {getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../slice/basketSlice';



function Header() {
  const firebase=useFirebase()
  const navigate=useNavigate()
  const items=useSelector(selectItems)



  const handleClick =()=>{
    if(firebase.userName!=="Guest"){
      const auth=getAuth()
      signOut(auth).then(()=>{
        navigate("/")
      })
    }
    else{
      navigate("/signin")
    }

  }


  return (
    <header>
      <div className='flex bg-[#131921] p-1 flex-grow py-2 items-center'>
        <div 
        className='ml-2 mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <img 
          width={100}  
          height={6} 
          src="https://links.papareact.com/f90"  
          style={{ objectFit: 'cover' }}
          alt="logo" 
          onClick={()=> navigate("/")}
          className='cursor-pointer'
          />
        </div>

        {/* Search bar */}

        <div className='mx-2 hidden sm:flex items-center flex-grow h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" />
          <SearchIcon fontSize='medium' className='m-2'/>
        </div>

        {/* Right */}

        <div className='text-white flex items-center text-xs space-x-6 text-left mx-2 whitespace-nowrap'>
          <div className='link'>
            <div onClick={handleClick}>
            <p>{firebase.userName ? `Hello, ${firebase.userName}`: "Signup/ Login"}</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
            </div>
          </div>

          <div className='link'>
            <p>Returns</p> 
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div 
          className=' relative link flex items-center'
          onClick={()=> navigate("/checkout")}
          >
            <span className='absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold '>{items.length}</span>
            <ShoppingCartOutlinedIcon fontSize='large'/>
            <p className=' hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
          </div>
        </div>

      </div>




      {/* Bottom */}
      <div className='flex items-center p-2 pl-6 space-x-3 bg-[#232f3e] text-white'>
        <p className='link flex items-center'>
          <MenuIcon fontSize=''/>
          All
        </p>
        <p className='link '>Prime Video</p>
        <p className='link '>Amazon Business</p>
        <p className='link '>Today's Deals</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Food & Grocery</p>
        <p className='hidden link lg:inline-flex'>Prime</p>
        <p className='hidden link lg:inline-flex'>Buy Again</p>
        <p className='hidden link lg:inline-flex'>ShopperToolkit</p>
        <p className='hidden link lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header