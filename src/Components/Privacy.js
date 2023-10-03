import React from 'react'
import { list } from '../assets/index'
import { manWithKey } from '../assets/index'
import vector from '../assets/Vector.png'

import { motion } from 'framer-motion'

const Privacy = () => {
  return ( 
    <div className='w-full relative mt-20 '>
        <div className='w-full xs:px-4 md:w-10/12 md:mx-auto text-white font-titleFont'> 
           <div>
            <div className='sm:text-center lg:text-start'>
            <motion.h1 
              initial={{x:-20, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{delay: 1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
              ease:'easeInOut', duration: 1}}
            className='lg:text-2xl xs:text-xl font-extrabold'>Privacy Policy and </motion.h1>
                 <motion.h1 
                   initial={{x:-100, opacity: 0}}
                   animate={{x:0, opacity: 1}}
                   transition={{delay: 1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                   ease:'easeInOut', duration: 1}}
                 className='lg:text-2xl xs:text-xl text-primeColor font-extrabold'>  Terms</motion.h1>
                   <p className='lg:mt-10 xs:mt-5 xs:text-xs lg:text-sm'>Last updated on September 12, 2023</p>
                    <p className='lg:mt-10 xs:mt-5 xs:text-xs lg:text-sm'>Below are our privacy & policy, which outline a lot of goodies. </p>
                      <p className='lg:mt-10 xs:mt-5 xs:text-xs lg:text-sm'> it’s our aim to always take of our participant</p>
            </div>
         <div className='mt-5 flex flex-col md:flex-row md:justify-between md:items-center gap-10 '> 
            <div className='border lg:w-6/12 w-full h-auto border-primeColor rounded-md'>
                    <p className='sml:w-3/4 xs:w-full md:w-full xs:px-4 mx-auto  py-6 lg:mt-10 xs:mt-5 xs:text-xs lg:text-sm'>At getlinked tech Hackathon 1.0, we value your privacy
                                 and are committed to protecting your personal information.
                                 This Privacy Policy outlines how we collect, use, disclose, 
                                 and safeguard your data when you participate in our tech 
                                 hackathon event. By participating in our event, you consent 
                                 to the practices described in this policy.</p>
                                 <div className='sml:w-3/4 md:w-full xs:w-full xs:px-4 mx-auto lg:mt-10 sm:mt-5 xs:mt-16 '>
                                 <p className='lg:text-xl xs:text-lg font-extrabold text-primeColor mb-5'>Licensing Policy</p>
                                   <p className='lg:mt-10 xs:mt-5 xs:text-xs lg:text-sm'>Here are terms of our Standard License:</p>
                                   <div className='mt-5'>
                                       <div className='flex justify-between gap-5 items-center'>
                                           <img src={list} alt='list' />
                                           <p className=' xs:mt-5 xs:text-xs lg:text-sm'>The Standard License grants you a non-exclusive right to
                                                 navigate and register for our event</p>
                                       </div>
                                       <div className='flex justify-between gap-5 items-center mt-5'>
                                       <img src={list} alt='list' />
                                       <p className=' xs:mt-5 xs:text-xs lg:text-sm'>You are licensed to use the item available at any free source
                                           sites, for your project developement</p>
                                       </div>
                                       <div className='w-36 mx-auto my-16 bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md'>
                                             <button className='text-xs py-3 px-8'>Read More</button>
                                          </div>
                                   </div>
                                 </div>
                                 
                             
                           </div> 
                           <div className='flex flex-col'>
                            <div className='sml:mr-3 xs:mr-10 sm:mr-5  md:mt-40  sml:mt-0'>
                            <img className='' src={manWithKey} alt='key' />
                            </div>
                              
                               <div className='hidden md:block absolute sml:top-2/4 md:top-20 xs:top-3/4 sm:top-2/3  xs:ml-5 xs:mt-10  sml:ml-0 sml:mt-32 sm:ml-0 sm:mt-6 sml:-right-36 lg:mt-52 lg:right-5'> 
                              <img className='lg:w-5/6 sm:w-full  sml:w-4/6 xs:w-2/3' src={vector} alt='vector' />
                              </div>
                           </div>
                 </div>
             
              </div>
            </div>
        <p className='border-b shadow-md border-none sm:mt-10 lg:mt-28'></p>
    </div>
  )
}

export default Privacy