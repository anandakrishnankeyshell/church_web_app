import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  const scrollTotop=()=>{
    window.scroll({top:0, left:0 ,behavior:'smooth'})
  }

 
  return (
    <>
   
    <section className='bg-gray-800 text-white '>
        <div>
          <p  className='p-3 text-center '>
            <button onClick={scrollTotop}
            className='px-4 py-3 bg-slate-400 rounded-full animate-bounce'
            >
            <FontAwesomeIcon icon={faAngleUp} />
            </button>
          </p>  
        </div>
        <div className='flex justify-end'>
        <div>
              <a   href='donation'
                    style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                     className="block px-4 py-1  text-gray-100 bg-slate-700
                      hover:bg-gray-100 hover:text-gray-900 rounded-lg duration-500 ease-in-out
                       mx-10">
                                  Donation for church
                    </a>
              </div>
          <a href='login'
          style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                       className="flex  px-4 py-1  text-gray-100 bg-slate-700
                        hover:bg-gray-100 hover:text-gray-900 rounded-lg duration-500 ease-in-out
                        mx-10"  >
             Admin
            </a>
        </div>
        <div>
          <p 
           className='p-3 pt-0 text-center'>
            <a href='https://keyshell.net/' rel="noreferrer"
             target='_blank'
             style={{fontFamily:'Quicksand, serif'}}>
              <FontAwesomeIcon icon={faCopyright}/>
               KeyShell</a>
          </p>
          
        </div>
    </section>
    </>
  )
}

export default Footer