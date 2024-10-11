import React from 'react'
import bgimage from './assets/bgimage.png'
import logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons';
import google from './assets/google.png'

const App = () => {
  return (
    <>
    <div className=' flex w-[100%] items-center justify-center flex-row '>
      

    <div style={{
      backgroundImage: `url(${bgimage})`,
      minHeight: '100vh',      
      backgroundSize: 'contain', 
      backgroundPosition: 'center',
      backgroundPosition: 'left center' ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'fixed',
      
      
      
    }} className=' bg-black  hidden sm:block sm:w-[40%] md:w-[50%]   lg:w-[70%]'>
  

</div>
      


      <div className='sm:w-[60%] md:w-[50%] w-full'>
        
          <img src={logo} alt=""  className='mt-24 ml-8'/>
          <p className='text-2xl font-semibold mt-6 ml-8'>Nice to see you again</p>
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Login</p>
          <input type="email" className='ml-8  p-2 rounded-md  flex w-[80%] mt-1 border bg-gray-100  border-none' placeholder='Email or phone number' />
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Password</p>
          <div className="relative ml-8 w-[80%] mt-1">
            <input
              type='password'
              className="p-2 rounded-md w-full border bg-gray-100"
              placeholder="Enter password"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
            </div>






            
             <div className="mt-4 flex items-center justify-between w-[80%] ml-8">
  <label className="relative flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  </label>

  
  <p className="ml-3">Remember me</p>

  <p className="ml-auto  cursor-pointer">Forgot password?</p>
</div>

<button  className="p-2 rounded-md ml-8 mt-6 border bg-black text-white font-bold w-[80%]">Sign in</button>
<div>

<button  className="rounded-md ml-8 mt-10  justify-center flex items-center p-2 text-center bg-black  text-slate-50 font-semibold w-[80%] gap-4"><img src={google} alt="" />
 Or sign in with Google
  </button>
</div>

<p className='text-center mt-3'>Dont have an account? <strong>Sign up now</strong></p>



            </div>
  
        
      </div>
  
    </>
  )
}

export default App
