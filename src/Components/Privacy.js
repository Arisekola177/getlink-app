import React from 'react'
import { list } from '../assets/index'
import { manWithKey } from '../assets/index'
import vector from '../assets/Vector.png'

const Privacy = () => {
  return ( 
    <div className='w-full relative mt-20 '>
        <div className='w-10/12 mx-auto text-white font-titleFont'> 
           <div>
            <div>
            <h1 className='text-2xl font-extrabold'>Privacy Policy and </h1>
                 <h1 className='text-2xl text-primeColor font-extrabold'>  Terms</h1>
                   <p className='mt-10 text-sm'>Last updated on September 12, 2023</p>
                    <p className='text-sm mt-10 '>Below are our privacy & policy, which outline a lot of goodies. </p>
                      <p className='text-sm'> it’s our aim to always take of our participant</p>
            </div>
         <div className='mt-5 flex justify-between items-center gap-10 '> 
            <div className='border w-6/12 h-auto border-primeColor rounded-md'>
                    <p className='w-3/4 mx-auto h-40 py-6 text-sm'>At getlinked tech Hackathon 1.0, we value your privacy
                                 and are committed to protecting your personal information.
                                 This Privacy Policy outlines how we collect, use, disclose, 
                                 and safeguard your data when you participate in our tech 
                                 hackathon event. By participating in our event, you consent 
                                 to the practices described in this policy.</p>
                                 <div className='w-3/4 mx-auto'>
                                 <p className=' text-xl font-extrabold text-primeColor'>Licensing Policy</p>
                                   <p>Here are terms of our Standard License:</p>
                                   <div className='mt-5'>
                                       <div className='flex justify-between gap-5 items-center'>
                                           <img src={list} alt='list' />
                                           <p className='text-xs'>The Standard License grants you a non-exclusive right to
                                                 navigate and register for our event</p>
                                       </div>
                                       <div className='flex justify-between gap-5 items-center mt-5'>
                                       <img src={list} alt='list' />
                                       <p className='text-xs'>You are licensed to use the item available at any free source
                                           sites, for your project developement</p>
                                       </div>
                                       <div className='w-32 mx-auto my-16 bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md'>
                                             <button className='text-xs py-2 px-8'>Read More</button>
                                          </div>
                                   </div>
                                 </div>
                                 
                             
                           </div> 
                           <div>
                               <img className='w-5/6' src={manWithKey} alt='key' />
                           </div>
                 </div>
             
              </div>
            </div>
        <div className='absolute top-0 right-20'> 
            <img src={vector} alt='vector' />
        </div>
        <p className='border-b shadow-md border-none mt-28'></p>
    </div>
  )
}

export default Privacy