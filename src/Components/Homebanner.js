import React from 'react'
import star from '../assets/star.png'
import vector4 from '../assets/Vector 4.png'
import { title } from '../assets/index'
import { countDown } from '../assets/index'
import { manWearingSmart } from '../assets/index'
import { image1 } from '../assets/index'
import Register from './Register'
import star1 from '../assets/star (1).png'

const Homebanner = () => {
  return (
    <div className='w-full relative overflow-hidden border-b border-slate-300'>
        <div className='w-11/12 mx-auto flex justify-between items-center font-titleFont text-white mt-5'>
              <div>
                  <img src={star}  alt='star' />
              </div>
              <div className=''>
                   <h2 className='italic text-3xl'>Igniting a Revolution in HR Innovation</h2>
                   <div className='ml-80'>
                       <img className='w-2/3' src={vector4} alt='vector' />
                   </div>
              </div>
        </div>
        <div className='w-11/12 mx-auto flex justify-between items-center font-titleFont text-white mt-8'>
            <div>
               <img src={title} alt='title' />
               <div className='mt-3'>
               <p className='text-xl'>Participate in getlinked tech Hackathon 2023 stand </p>
                    <p className='text-xl'>a chance to win a Big prize</p>
               </div>
                    <div className='w-32 mt-6 text-center'>
                    <Register />
                    </div>
                    <div className='mt-10'>
                        <img src={countDown} alt='countdown' />
                    </div> 
                   
            </div>
            <div>
                 <img src={manWearingSmart} alt='man' />
                 <div className='absolute mt-10 top-28 -right-20'>
                     <img className='w-2/3' src={image1} alt='image1' />
                 </div>
                 <div className='absolute top-20'>
                    <img src={star1} alt='star' />
                 </div>
                 <div className='absolute top-3/4 left-1/3'>
                    <img src={star1} alt='star' />
                 </div>
            </div>
            
        </div>
    </div>
  )
}

export default Homebanner