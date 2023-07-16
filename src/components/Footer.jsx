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

        <div>
          <p 
           className='p-3 text-center'>
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