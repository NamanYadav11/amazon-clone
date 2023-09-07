import React, { useState } from 'react'
import { logo } from '../asset'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/firebase'
import { updateProfile } from 'firebase/auth'


function Signup() {
  const firebase=useFirebase();
  const navigate=useNavigate();

  const[errMsg,setErrMsg]=useState("")

    const[values,setValues]=useState({
      name:"",
      email:"",
      password:"",
  })

  const handleSignup = (event) => {
    if(!values.name || !values.email || !values.password){
      setErrMsg("Fill all fields")
    }
    event.preventDefault()
    firebase.signupUserWithEmailAndPassword(values.email, values.password,values.name)
    .then((value)=>{
      const user=value.user
      updateProfile(user,{
        displayName:values.name,
      }).then(()=>navigate("/"))
    
    })
    .catch((error)=>{
      setErrMsg(error.message)
      console.log(error.message)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  

  return (
    <div>
      <form className='flex flex-col items-center'>
      <div>
        <img src={logo} 
          className='h-10 mt-5'
          alt="" 
        />
      </div>
      <div className='flex flex-col w-96 border-slate-200 border-2 mt-5 p-5 rounded-lg'>

        <p className='text-3xl  font-normal'>Create Account</p>

        <label className='text-lg mt-3'>Your name</label>
        <input 
        className='border-[1px] p-1 rounded-sm border-slate-600'  
        type="text" 
        placeholder='Enter your name'
        onChange={handleChange}
        value={values.name}
        name="name"
        required
        autoComplete="on"
        />

        <label className='text-lg mt-3'>Email</label>
        <input 
        className='border-[1px] p-1 rounded-sm border-slate-600'  
        type="email" 
        placeholder='Enter your email' 
        onChange={handleChange}
        value={values.email}
        required
        name="email"
        autoComplete="on"
        />


        <label className='text-lg mt-2'>Password</label>
        <input 
        className='border-[1px] p-1 rounded-sm border-slate-600' 
        type="password" 
        placeholder='At least 6 characters'
        onChange={handleChange}
        value={values.password}
        required 
        name="password"
        autoComplete="on"
        />

        
        <div className='text-md text-red-600'>
          {errMsg}
        </div>

        <p className='text-sm mt-5'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>


        <button 
        onClick={handleSignup}
        className='text-md mt-5 bg-[#f7ca00] hover:bg-[#f7d600] p-1 rounded-md'>
          Continue
        </button>

        <div className='border h-0 mt-7'/>



        <div className='mt-5'>
          <h2 className='text-lg font-bold'>Buying for work?</h2>
          <p className='text-md  text-[#0066c4] hover:text-[#cf5500] link'>Create a free business account</p>
        </div>


        <div className='border h-0 mt-7'/>

        <div className='mt-5 flex gap-2'>
          <h2 className='text-lg'>Already have an account?</h2>
          <Link to="/Signin">
          <p className='text-md  text-[#0066c4] hover:text-[#cf5500] link'>Sign in<ArrowRightIcon fontSize='small' className='text-[#0065c49b]'/></p>
          </Link>
        </div>

        <p className='text-sm mt-5'>By creating an account or logging in, you agree to Amazon's <span className='text-[#0066c4] hover:text-[#cf5500] link'>Conditions of Use</span>  and <span className='text-[#0066c4] hover:text-[#cf5500] link'>Privacy Notice</span>.</p>

      </div>

    </form>
    </div>
  )
}

export default Signup