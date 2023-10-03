import React, { useState } from 'react'
import Register from './Register'
import vector1 from '../assets/Vector (1).png'
import vector2 from '../assets/Vector (2).png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!isOpen);
      };

    const Links = [
        {name: 'Timeline', path: '/timeline'},
        {name: 'Overview', path: '/overview'},
        {name: 'FAQs', path: '/FAQ'},
        {name: 'Contact', path: '/contact'},
    ]
  return (
    <div className='w-full h-20 border-b border-slate-400 relative text-white font-titleFont'>
        <div className='lg:w-10/12 lg:mx-auto xs:w-full xs:px-6 py-8 font-titleFont text-white flex justify-between items-center'>
               <div>
                <Link className='cursor-pointer' to='/'>
                   <h2 className='font-extrabold'>get<span className='text-primeColor'>linked</span></h2>
                   </Link>
               </div>
               <div className='hidden md:flex justify-between items-center gap-10'>
                   {
                    Links.map((link) => (
                      <div key={link.name}>
                         <Link className='text-sm' to={link.path}>{link.name}</Link>
                        </div>
                    ))
                   }
                   <div className='ml-20 w-32'>
                    <Link to="/register">
                     <Register />
                     </Link>
                   </div>
               </div>
               <div className='block md:hidden'>
                 <button  onClick={toggleNavbar}>
                  {
                    isOpen ? ( <img className='cursor-pointer' src={vector2} alt='vector' /> )
                     : ( <img className='cursor-pointer' src={vector1} alt='vector' />)
                    
                  }
                 </button>
                
               </div>
        </div>
        <div  className={` absolute left-0 pb-3 flex flex-col w-full gap-5 items-start bg-secColor px-4 mb-4 z-[1] font-titleFont md:hidden ${isOpen ?'top-20 ':'top-[-490px]' }`}>
        {
                    Links.map((link) => (
                        <div className='lg:mt-5 xs:mt-2  ' key={link.name}>
                           <Link className='xs:text-xs px-6' to={link.path}>{link.name}</Link>
                          </div>
                    ))
                   }
                   <div className='lg:ml-20 xs:ml-8 w-32 text-white'>
                    <Link to='/register'>
                     <Register />
                     </Link>
                   </div>
            </div>
    </div>
  )
}

export default Navbar