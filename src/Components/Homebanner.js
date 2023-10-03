import React from 'react'

import { motion } from 'framer-motion'
import vector4 from '../assets/Vector 4.png'
import { title } from '../assets/index'
import { countDown } from '../assets/index'
import { manWearingSmart } from '../assets/index'
import { image1 } from '../assets/index'
import Register from './Register'

import { Link } from 'react-router-dom'

const Homebanner = () => {
  return (
    <div className='w-full relative overflow-hidden'>
        <div className='xs:w-full xs:px-2 md:w-11/12 md:mx-auto flex justify-between items-center font-titleFont text-white mt-5'>
              <div className=''>
                 
              </div>
              <motion.div
               initial={{x:-100,opacity: 0}}
               whileInView={{x:0, opacity: 1}}
               transition={{delay: 0.1, x:{type:'spring', stiffness: 60},
                opacity:{duration:1}, ease:'easeIn', duration:1}}
               className=''>
                   <h2 className='italic font-bold xs:text-start sml:text-center xs:text-xs sm:text-sm sm:text-center sml:text-lg md:text-2xl lg:text-3xl'>Igniting a Revolution in HR Innovation</h2>
                   <div className='xs:ml-36 sm:ml-48 sml:ml-72 md:ml-96'>
                       <img className='w-2/3' src={vector4} alt='vector' />
                   </div>
              </motion.div>
        </div>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row md:justify-between md:items-center font-titleFont text-white mt-8'>
            <div>
               <motion.img
                initial={{y:-100,opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.2, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, ease:'easeIn', duration:1}}
                className='xs:w-2/3 xs:mx-auto mt-10  md:mx-0' src={title} alt='title' />
               <div className='mt-3'>
               <motion.p 
                initial={{x:-100,opacity: 0}}
                whileInView={{x:0, opacity: 1}}
                transition={{delay: 0.8, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, ease:'easeIn', duration:1}}
               className='xs:text-xs xs:text-center sm:text-sm sm:text-center md:text-start lg:text-xl'>Participate in getlinked tech Hackathon
                     2023 stand a chance to win a Big prize</motion.p>
               </div>
                    <motion.div
                     initial={{y:-100,opacity: 0}}
                     whileInView={{y:0, opacity: 1}}
                     transition={{delay: 0.5, y:{type:'spring', stiffness: 60},
                     opacity:{duration:1}, ease:'easeIn', duration:2}}
                     className='w-32 xs:mx-auto xs:mt-8 md:mx-0 lg:mt-6 text-center'>
                        <Link
                         to='/register'>
                        <Register />
                    </Link>
                    </motion.div>
                    <div className='xs:w-2/3 xs:mx-auto mt-10  md:mx-0'>
                        <motion.img 
                           initial={{y:-100, opacity: 0}}
                           whileInView={{y:0, opacity: 1}}
                           transition={{delay: 0.2, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                           ease:'easeInOut', duration: 1}}
                        src={countDown} alt='countdown' />
                    </div> 
                   
            </div>
            <div className=''>
                
                 <motion.img
                 initial={{x:-100,opacity: 0}}
                 whileInView={{x:0, opacity: 1}}
                 transition={{delay: 0.2, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, ease:'easeIn', duration:1}}
                  src={manWearingSmart} 
                  alt='man' />
                 <div className='absolute xs:top-96 sm:mt-20 xs:mt-0 md:top-20 md:ml-8 md:mt-8 lg:top-10 lg:mt-36  '>
                     <motion.img 
                       initial={{y:-100, opacity: 0}}
                       whileInView={{rotate: 360, opacity: 1}}
                       transition={{delay: 0.2, y:{type:'tween', rotate: 360}, opacity:{duration:1}, 
                       ease:'easeInOut', duration: 1}}
                     className='md:w-5/6 sm:w-full ' src={image1} alt='image1' />
                 </div>
                 
               
            </div>
            
        </div>
        <p className='border border-b border-slate-300'></p>
    </div>
  )
}

export default Homebanner