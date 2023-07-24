import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MOCK_DATA from '../../../sampl_data/MOCK_DATA.json'
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PeoplesData = () => {

  // const [ItemDatas, setItemData] = useState([])
  const [popledata,setpeopledata]=useState([])

  const [currentPage, setcurrentPage] = useState(1)
  const [itemperPage, setitemperPage] = useState(10)
  const [serchData,setserchData]=useState('')

  // console.log(serchData);
  console.log(popledata);

  

  
  const lastPage = MOCK_DATA.length / itemperPage;

  const currentPagevalue=[]
    for(let i=1;i<=lastPage;i++){
      currentPagevalue.push(i)
    }

  const curentPagePost = currentPage * itemperPage
  const nextPagePost = curentPagePost - itemperPage

  const getData = async()=>{
    const result=await axios.get('http://localhost:5000/people_details')

    setpeopledata(result.data.users)

  }

  let onHandleChange=(e)=>{
    setitemperPage(e.target.value)
  }

  



  useEffect(() => {

    getData()
  //   setItemData(MOCK_DATA.slice(nextPagePost, curentPagePost))
  // }, [nextPagePost, curentPagePost]
  
},[])



  const previousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < lastPage) {
      setcurrentPage(currentPage + 1)
    }
  }




  return (
    <>
      <section>
      <div className='flex justify-center  mt-28 items-baseline '>
            <div className='rounded-lg '>
              <input type="text" onChange={(e)=>setserchData(e.target.value)} 
              placeholder='serch for name or mail id' 
              className='me-1 px-2 border border-gray-400  rounded-lg'/> 
              <FontAwesomeIcon className='px-1' icon={faMagnifyingGlass} />
              </div>
          </div>
        <div className='grid overflow-x-auto'>
          <div className='flex justify-center ' >
            <table className='bg-rose-100 m-10  text-center'>
              <thead className='border-b-4 border-black '>
                <tr className='bg-slate-300'>
                  <th className='px-20'>Name</th>
                  <th className='px-20'>Email</th>
                  <th className='px-20'>Mobile</th>
                </tr>
              </thead>
              {[...popledata.slice(nextPagePost, curentPagePost)].filter((item)=>{
               return serchData.toLowerCase()===''?item:
                item.first_name.toLowerCase().includes(serchData) 
                || item.email.toLowerCase().includes(serchData)
              }
              ).map((ItemData, key) => (
                <tbody key={ItemData.id} className='border-b border-gray-400'>
                  <tr>
                    <td >{ItemData.first_name}</td>
                    <td >{ItemData.email}</td>
                    <td >{ItemData.phone}</td>
                  </tr>
                </tbody>
              ))}

            </table>


          </div>
          <div className='flex justify-center items-center space-x-4 pb-20'>

                <p className='px-3 py-2 bg-slate-400 rounded-md text-white'>select nuber to Display list</p>
            <select value={itemperPage} onChange={onHandleChange}
            className='block px-3 py-2 leading-tight bg-white border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 
            focus:ring-opacity-50'>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>


            <button onClick={previousPage} 
            className='px-4 py-2 text-white bg-indigo-500 rounded-md
             hover:bg-indigo-600 focus:outline-none focus:ring
              focus:ring-indigo-500 focus:ring-opacity-50'
              > <FontAwesomeIcon icon={faArrowLeft} /> previous </button>

            <div className='flex items-baseline'>
              <p className='pe-1'>page</p>
               <select value={currentPage} onChange={(e)=>setcurrentPage(e.target.value)}
              className='block px-2 py-2 text-center leading-tight bg-white border border-gray-300 rounded-md 
              shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 
              focus:ring-opacity-50'>
                { currentPagevalue.map((item,index)=>(
                   <option key={index} value={item} > 
                   {item}</option>
                ))
                 }
              </select>
            </div>


            <button onClick={nextPage}
            className='px-4 py-2 text-white bg-indigo-500 rounded-md
             hover:bg-indigo-600 focus:outline-none focus:ring
              focus:ring-indigo-500 focus:ring-opacity-50'
              >next <FontAwesomeIcon icon={faArrowRight} /></button>



          </div>
        </div>
      </section>
    </>
  )
}

export default PeoplesData