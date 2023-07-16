import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Homeabout = () => {
  return (
    <>
    
    <div className="bg-yellow-50">
      <div className="col py-5">
        <div className='p-20'>
          <p className="m-3 text-center text-orange-700"
          style={{fontSize:'2.5rem', fontFamily:'Playfair Display, serif'}}
          >
            About Us
          </p>
          <hr className=' p-px bg-orange-600 m-5'/>
          <p data-aos="fade-right" className='text-justify' style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}>  Holy Family Church, Kiliyarkandam, one of the zealous Syro Malabar Catholic community under the Diocese of Idukki, was established in 1964. Fr. Zakarias Thudiyamplackal, first vicar of the church, formed the parishners into a faithful Christian community. The people of Kiliyarkandam, mainly farmers, belong to middle class families. Within the past six decades, the Christian community here grew up maintaining strong family ties and hold spiritual and traditional values in high esteem. Kiliyarkandam is one of those areas in Idukki with high concentration of Christian population majority being Syro-malabar catholics. Being guided by the Holy Spirit, we are united and nourished by the sacraments and Sacred Scripture</p>
          <hr className=' p-px bg-orange-600 m-5'/>
        </div>
        <div className='flex justify-end px-20'>
          <a href='more_about_us' 
          className='bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
            know more  <FontAwesomeIcon className='animate-ping ms-2' icon={faArrowRight} /></a>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Homeabout