import React from 'react'
import banner from '../assets/banner.jpg'
import {useState} from 'react'
import datas from '../Data'
function Explore({show}) {

  const [data,setData]=useState(datas)
  console.log(data)
  return (

    <div className={!show ? 'md:ml-32 mt-[6rem] p-5 bg-gray-50 flex gap-2 md:justify-between   flex-wrap' :'md:ml-60 mt-[6rem] p-5 bg-gray-50 flex gap-2 md:justify-between   flex-wrap'}>
      {data.map(ele=>(
        <div className="card mt-5  lg:w-[224px] hover:cursor-pointer py-2" key={ele.id}>
        <img src={ele.picture} alt="" className='w-full md:w-60 lg:64 lg:w-56 md:h-40 ' />
        <div className="detail flex items-center space-x-3 mt-2">
          <img src={ele.creatorpic} alt="" className='w-8 self-start' />
          <div className="info ">
            <p className='font-semibold'>{ele.title} </p>
            <p className='text-sm text-gray-600'>{ele.creator}</p>
            <div className="stats text-gray-600 flex items-center space-x-3">
              <p className='text-sm'>{ele.views}k views</p>
              <p className='text-sm'>{ele.timestamp}</p>

            </div>
          </div>
        </div>
      </div>
      ))}
      

    </div>
  )
}

export default Explore