import React from 'react'
import Register from './Register'

const Navbar = () => {
    const Links = [
        {name: 'Timeline', path: '#'},
        {name: 'Overview', path: '#'},
        {name: 'FAQs', path: '#'},
        {name: 'Contact', path: '#'},
    ]
  return (
    <div className='w-full h-20 border-b border-slate-400'>
        <div className='w-10/12 mx-auto py-8 font-titleFont text-white flex justify-between items-center'>
               <div>
                   <h2 className='font-extrabold'>get<span className='text-primeColor'>linked</span></h2>
               </div>
               <div className='flex mr-20 justify-between gap-10'>
                   {
                    Links.map((link) => (
                        <ul key={link.name}>
                            <li className='text-xs mt-1'><a href={link.path}>{link.name}</a></li>
                        </ul>
                    ))
                   }
                   <div className='ml-20 w-32'>
                     <Register />
                   </div>
               </div>
        </div>
    </div>
  )
}

export default Navbar