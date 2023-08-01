import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate =useNavigate()

   const adminUser={
    name:"admin",
    password:"admin123"
   }

   const [adminDetails,getadminDetails] =useState({name:"",password:""})

   console.log(adminDetails);

    const adminlogin=(e)=>{

        e.preventDefault()

        if(adminDetails.name === adminUser.name && adminDetails.password === adminUser.password){
           alert("login success")
            navigate("admin")
        }else{
            alert("name or password incorrect please try again")
        }
    
    }
    return (
        <>

            <div className='pt-0 p-10 h-screen flex justify-center items-center '>
                
                <form className='block mb-20 bg-slate-300 rounded-lg p-10'>

                    <input className='block mb-10 px-3 py-1 rounded-lg  bg-slate-500 hover:bg-white'
                        type="text" id='name' name='name'
                        onChange={(e)=>getadminDetails({...adminDetails, name:e.target.value}) } 
                        value={adminDetails.name}
                        placeholder='Admin id' required/>

                    <input className='block my-10 px-3 py-1 rounded-lg  bg-slate-500 hover:bg-white'
                        type="password" id='password' name='password'
                        onChange={(e)=>getadminDetails({...adminDetails,password:e.target.value})}
                        value={adminDetails.password}
                        placeholder='password' required/>

                    <div className='flex justify-center'>
                        <button type='submit' onClick={adminlogin}
                        className=' px-3 py-1 rounded-lg hover:outline bg-slate-500 hover:bg-white text-white hover:text-black'>
                            Login
                        </button>
                    </div>

                </form>

            </div>


        </>
    )
}

export default Login