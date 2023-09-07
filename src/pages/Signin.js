import React, { useState } from 'react'
import { googleLogo, logo } from '../asset'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/firebase'







function Signin() {
  const firebase=useFirebase()
  const navigate=useNavigate();

  const[errMsg,setErrMsg]=useState("")

  const[values,setValues]=useState({
    email:"",
    password:"",
  })

  const handleSignin = (event) => {
    if(!values.email || !values.password){
      setErrMsg("Fill all fields")
    }
    event.preventDefault()
    firebase.signinUserWithEmailAndPassword(values.email, values.password)
    .then((value)=>{
    console.log(value)
    navigate("/")

  })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  const handleGoogleSignIn=()=>{
    firebase.SignupWithGoogle()   
      .then((value)=>{
      console.log(value)
      navigate("/")
  
    })
      .catch((error)=>{
        console.log(error.message)
      })
  }

  return (
    <>
    <form className='flex flex-col items-center'>
      <div>
        <img src={logo} 
          className='h-10 mt-5'
          alt="" 
        />
      </div>
      <div className='flex flex-col w-96 border-slate-200 border-2 mt-5 p-5 rounded-lg'>

        <p className='text-3xl  font-normal'>Sign in</p>

        <label className='text-lg mt-3'>Email</label>
        <input 
        className='border-[1px] p-1 rounded-sm border-slate-600'  
        type="email" 
        placeholder='Enter your email' 
        onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}
        value={values.emaill}
        required
        autoComplete="on"
        />
        
        <label className='text-lg mt-2'>Password</label>
        <input 
        className='border-[1px] p-1 rounded-sm border-slate-600' 
        type="password" 
        placeholder='Enter your password' 
        value={values.password} 
        onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}
        required
        autoComplete="on"
        />

        <div className='text-md text-red-600'>
          {errMsg}
        </div>
        
        <button 
        onClick={handleSignin}
        className='text-md mt-5 bg-[#f7ca00] p-1 rounded-md'>
          Continue
        </button>
        <p className='text-sm mt-5'>By continuing, you agree to Amazon's <span className='text-[#0066c4] hover:text-[#cf5500] link'>Conditions of Use</span>  and <span className='text-[#0066c4] hover:text-[#cf5500] link'>Privacy Notice</span>.</p>

        <p className='text-md mt-5 -ml-2 text-[#0066c4] hover:text-[#cf5500] link'><ArrowRightIcon className='text-slate-500'/>Need help?</p>

      </div>

    </form>

    <div className='flex flex-col items-center'>
      <button 
      onClick={handleGoogleSignIn}
      className='flex items-center gap-2 mt-6 w-96  justify-center border-2 border-slate-300 p-1 rounded-lg hover:bg-slate-100'>
        <img src={googleLogo} className='h-5' alt="" />Continue with google
      </button>

      <div className='mt-6 w-96 flex items-center'>
        <div className='border h-0 flex-grow mr-1'/>
        <p className='text-sm text-slate-700'>New to Amazon?</p>
        <div className='border h-0 flex-grow ml-1'/>
      </div>

      <div>
        <Link to="/signup">
        <p className='mt-6 w-96 flex justify-center border-2 border-slate-300 p-1 rounded-lg hover:bg-slate-100'>Create your Amazon account</p>
        </Link>
      </div>

    </div>
    
    </>
  )
}

export default Signin