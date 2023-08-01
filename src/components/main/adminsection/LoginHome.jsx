import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'



const LoginHome = () => {

  const navigate = useNavigate()
    
    const logOut=()=>{
        alert("login out")
       navigate('/')
    }

  return (
    <>
     <div className='flex justify-end pe-10 '>
                    <button className="block px-4 py-2  text-gray-100 bg-slate-700
                      hover:bg-gray-100 hover:text-gray-900 rounded-lg duration-500 ease-in-out mt-2"
                       onClick={logOut}> 
                    singout
                    </button>
                </div>
    <div className='flex justify-center'>
        <div className='h-screen' >
           <div className='fixed left-0 top-16 bg-slate-300 h-screen text-center'>
                <div className=' bg-slate-200 hover:bg-slate-100  py-2'>
                    
                    <Link to="people_details" className='px-10 py-2'>
                        people Data
                    </Link>
                </div>
                <div className=' bg-slate-200 hover:bg-slate-100 py-2'>
                    <Link className='px-10 py-2'>
                        donation Data
                    </Link>
                </div>
                
           </div>
        </div>
        <div className='ml-60 '>
            
            <Outlet/>
            
        </div>
    </div>

    </>
  )
}

export default LoginHome