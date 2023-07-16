import React from 'react'
// import bgmi from "../image/bgim.jpg"

const Homepgservice = () => {
    return (
        <>
            {/* <div className='top-0 left-0' style={{
            backgroundImage:`url(${bgmi})`,
            height:'100vh'
            }}></div> */}
            <div className="p-15 mb-10 text-center" >
                <div className="text-black my-5">
                    <p className='text-orange-700 py-10 pt-16' style={{fontSize:'2.5rem', fontFamily:'Playfair Display, serif'}}>Our Services</p>
                    <p style={{fontSize:'1.5rem',fontFamily:'Quicksand, serif'}}>
                        Vicar -
                        <span 
                    style={{fontSize:'1.5rem', fontFamily:'Playfair Display, serif'}}>
                        Fr: George perumalil
                        </span>
                        </p>
                    <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}>
                        contact no: <span style={{fontWeight:'bold'}}>+91 94977 39357</span>
                        </p>
                </div>
                <div className="grid md:grid-cols-3 px-10">
                    <div className='m-5 bg-yellow-50 rounded-lg
                    hover:shadow-lg hover:scale-105 transition-transform duration-300'>
                        <div data-aos="fade-up" className="py-10">
                            <p className='text-orange-700 pb-5'
                             style={{fontSize:'1.5rem', 
                             fontFamily:'Playfair Display, serif'}}>
                                CONFESSION</p>
                            <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                            >Monday - Saturday : 5:45AM - 6:10AM</p>
                            <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                            >Sunday: <br /> 5:30-5:50 AM, 7:30-7:50 AM , 9:30-9:50 AM</p>
                        </div>
                    </div>
                    <div className='m-5 bg-yellow-50 rounded-lg
                    hover:shadow-lg hover:scale-105 transition-transform duration-300'>
                        <div data-aos="fade-up" className="py-10">
                            <p className='text-orange-700 pb-5'
                             style={{fontSize:'1.5rem', 
                             fontFamily:'Playfair Display, serif'}}>
                                HOLY MASS TIMINGS</p>
                            <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                            >Monday - Saturday : 6:15 AM</p>
                            <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                            >Sunday: 6:00 AM, 8:00 AM , 10:00 AM</p>
                        </div>
                    </div>
                    <div className='m-5 bg-yellow-50 rounded-lg
                    hover:shadow-lg hover:scale-105 transition-transform duration-300'>
                        <div data-aos="fade-up" className="py-10">
                            <p className='text-orange-700 pb-5'
                             style={{fontSize:'1.5rem', 
                             fontFamily:'Playfair Display, serif'}}>
                                CATECHISM</p>
                            <p style={{fontFamily:'Quicksand, serif',fontWeight:'bold'}}
                            >Sunday's: After 10:00 AM HOLY MASS</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepgservice