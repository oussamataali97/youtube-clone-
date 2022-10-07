import React from 'react'
import logo from '../assets/youtube.svg'
import {AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import {MdKeyboardVoice} from 'react-icons/md'
import {BiVideoPlus} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import avatar from '../assets/avatar.png'

function Navbar({show,setShow}) {

  const handlettoggle =()=>{
    setShow(!show)
  }
  return (
    <div className='navbarr px-5  bg-white z-20 py-2  fixed  top-0 right-0 left-0'>
      <div className="flex justify-between items-center ">
      <div className="left-sec flex space-x-5">
        <button onClick={handlettoggle} className='outline outline-1 outline-gray-200 rounded-full p-2'><AiOutlineMenu size={20}/></button>
        <img src={logo} alt="" className='w-[80px]  md:w-[90px]'/>

      </div>

      <div className="middle-sec lg:flex items-center space-x-5 hidden ">
    
        <div className="relative ">
        <input type="text" placeholder='Recherchez' className='w-[37rem] p-2  outline outline-1 outline-gray-200' />
     
        <button className='bg-gray-100 absolute top-0 right-0 bottom-0 w-16 flex items-center justify-center'><AiOutlineSearch className='text-2xl'/></button>
        </div> 
        <button className='bg-gray-100 p-2 rounded-full'><MdKeyboardVoice className='text-2xl'/> </button>
      </div>

      <div className="right-sec flex items-center space-x-8">
        <button><BiVideoPlus className='text-2xl'/></button>
        <button><IoMdNotificationsOutline className='text-2xl'/></button>
        <img src={avatar} alt="avatar"  className='w-8' />
      </div>  
      </div>

      <div className={!show ? " ease-in duration-300 bottom flex  space-x-3 md:ml-32 w-full   border-y-[1px] py-2 mt-2  -z-40" :"bottom flex  space-x-3 md:ml-56 w-full   border-y-[1px] py-2 mt-2  -z-40"}>
        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white  py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full  '>Tous</button>
        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Backend </button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'> videos</button>
        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Mix</button>
        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Backend </button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Musique</button>
        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Programation </button>


        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Cool</button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Fiver</button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>En direct</button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>CSS</button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Javascript</button>

        <button className='bg-gray-100 hover:bg-gray-900 hover:text-white py-0 md:py-1  outline-1 outline-gray-300 outline  px-3 md:px-5 rounded-full'>Hack</button>

 



      </div>
     
    </div>
  )
}

export default Navbar