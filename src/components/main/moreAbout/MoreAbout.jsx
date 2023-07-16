import React from 'react'
import logoimg from '../image/logoimg.png'


const MoreAbout = () => {
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
          <div className='grid md:grid-cols-2'>
                <div className='flex items-center lg:ms-20'>
                    <p data-aos="fade-right" className='text-justify ' style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}>  Holy Family Church, Kiliyarkandam, one of the zealous Syro Malabar Catholic community under the Diocese of Idukki, was established in 1964. Fr. Zakarias Thudiyamplackal, first vicar of the church, formed the parishners into a faithful Christian community. The people of Kiliyarkandam, mainly farmers, belong to middle class families. Within the past six decades, the Christian community here grew up maintaining strong family ties and hold spiritual and traditional values in high esteem. Kiliyarkandam is one of those areas in Idukki with high concentration of Christian population majority being Syro-malabar catholics. Being guided by the Holy Spirit, we are united and nourished by the sacraments and Sacred Scripture</p>
                </div>
                <div >
                    <img className='p-10 lg:p-5 lg:h-96 lg:ms-20'
                    src={logoimg} alt="..." />
                </div>
            </div>
          <hr className=' p-px bg-orange-600 m-5'/>
          <div className='flex justify-center'>
              <div>
                    <a href='people_details'
                    style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                     className="block px-4 py-2  text-gray-100 bg-slate-700
                      hover:bg-gray-100 hover:text-gray-900 rounded-lg duration-500 ease-in-out
                      m-5 mx-10"  >
                                  Our Peoples
                    </a>
                    
              </div>
              <div>
              <a   href='donation'
                    style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                     className="block px-4 py-2  text-gray-100 bg-slate-700
                      hover:bg-gray-100 hover:text-gray-900 rounded-lg duration-500 ease-in-out
                      m-5 mx-10">
                                  Donations
                    </a>
              </div>
          </div>

        </div>
       
      </div>
    </div>
    </>
  )
}

export default MoreAbout