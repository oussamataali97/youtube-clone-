import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdKeyboardArrowDown,MdOndemandVideo,MdHistory,MdOutlineVideoLibrary,MdOutlineExplore} from 'react-icons/md'
import {SiYoutubestudio} from 'react-icons/si'
import {AiOutlineTrophy,AiOutlineLike} from 'react-icons/ai'
import {GiConsoleController} from 'react-icons/gi'
import avatar from '../assets/avatar.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'

import pic3 from '../assets/pic3.png'



function Menu({show}) {
if(show){
  return (
    <div className={ show ?' menu-section  bg-white fixed  top-0 z-50 w-56 md:flex h-full overflow-y-auto mt-[56px] scroll-smooth snap-y snap-mandatory' :' menu-section hidden bg-white fixed  top-0 z-50 w-56 md:flex h-full overflow-y-auto mt-[56px] scroll-smooth snap-y snap-mandatory'}>
           <div className="layout  mt-5 space-y-4 ">
            <button className='flex px-5 py-1  hover:bg-slate-200 w-full   items-center '><AiFillHome size={20} className='mr-5'/> Home</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><MdOutlineExplore size={20} className='mr-5'/>Explore</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><SiYoutubestudio size={20} className='mr-5'/>Shorts</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center border-b-[1px] pb-4'><MdOutlineVideoLibrary size={20} className='mr-5'/>Followers</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><AiFillHome size={20} className='mr-5'/>Library</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><MdHistory size={20} className='mr-5'/>Historty</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><MdOndemandVideo size={20} className='mr-5'/>Your Videos</button>
            <button className='flex px-5 py-1 hover:bg-slate-200 w-full items-center'><AiOutlineLike size={20} className='mr-5'/>Liked Videos</button>

            <button className='flex px-5 py-1  items-center border-b-[1px] w-full pb-4'><MdKeyboardArrowDown size={20} className='mr-5'/>Show More</button>
            <p className='font-semibold text-gray-500 px-5 py-1'>SUBSCRIPTIONS</p>
            <div className="follower flex px-5 py-1 space-x-5 items-center">
              <img src={avatar} alt="avatar" className='w-8' />
              <p>7-Toun</p>
            </div>
        
            <div className="follower flex px-5 py-1 space-x-5 items-center">
              <img src={pic1} alt="avatar" className='w-8' />
              <p>Camellia</p>
            </div>
            <div className="follower flex px-5 py-1 space-x-5 items-center">
              <img src={pic2} alt="avatar" className='w-8' />
              <p>Masta flow</p>
            </div>
            <div className="follower flex px-5 py-1 space-x-5 items-center">
              <img src={pic3} alt="avatar" className='w-8' />
              <p>Sch</p>
            </div>

            <button className='flex px-5 py-1  items-center border-b-[1px] w-full pb-4'><MdKeyboardArrowDown size={20} className='mr-5'/>Show 372 more</button>
            <p className='font-semibold text-gray-500'>Explore</p>
            <button className='flex px-5 py-1  items-center'><GiConsoleController size={20} className='mr-5'/>Gaming</button>
            <button className='flex px-5 py-1  items-center'><AiOutlineTrophy size={20} className='mr-5'/>Sports</button>
            <button className='flex px-5 py-1  items-center border-b-[1px] w-full pb-4'><MdKeyboardArrowDown size={20} className='mr-5'/>Show More</button>


            
           </div>


           
           

    </div>
  )
}else {
  return (
    <div className=' menu-section hidden bg-white fixed  top-0 z-50 w-32 md:flex h-full overflow-y-auto mt-[56px] scroll-smooth snap-y snap-mandatory'>
    <div className="layout  mt-5 space-y-4 ">
     <button className='flex flex-col justify-center px-5 py-1  hover:bg-slate-200 w-full   items-center '><AiFillHome size={20} /> Home</button>
     <button className='flex flex-col justify-center px-5 py-1 hover:bg-slate-200 w-full items-center'><MdOutlineExplore size={20} className=''/>Explore</button>
     <button className='flex flex-col justify-center px-5 py-1 hover:bg-slate-200 w-full items-center'><SiYoutubestudio size={20} className=''/>Shorts</button>
     <button className='flex flex-col justify-center px-5 py-1 hover:bg-slate-200 w-full items-center '><MdOutlineVideoLibrary size={20} className=''/>Followers</button>
     <button className='flex flex-col justify-center px-5 py-1 hover:bg-slate-200 w-full items-center'><AiFillHome size={20} className=''/>Library</button>




     
    </div>


    
    

</div>
  )
}
}

export default Menu