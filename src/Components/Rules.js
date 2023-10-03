import React from 'react'
import { motion } from 'framer-motion'
import { womanIpad } from '../assets/index'
import { Ellipse } from '../assets/index'
const Rules = () => {
  return (
   <div className='w-full h-auto text-white font-titleFont relative'>
        <div className='w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center xs:mt-0 md:mt-10'>
               <motion.div
                 initial={{x:-100, opacity: 0}}
                 whileInView={{x:0, opacity: 1}}
                 transition={{delay: 1.5, y:{type:"spring", stiffness: 50}, opacity:{duration:1}, 
                 ease:'easeIn', duration: 1}}
               className='w-full xs:text-center md:text-start md:mt-20 lg:mt-48 xs:mt-96'>
                  <h1 className='lg:text-2xl sml:mt-48 sm:mt-10 xs:text-xl  md:mt-0  font-extrabold'>Rules and </h1>
                  <h1 className='lg:text-2xl xs:text-xl sml:mt-2 md:mt-0 mb-4 font-extrabold text-primeColor'> Guidelines</h1>
                   <p className=' xs:text-xs lg:text-sm xs:text-start sm:text-center md:text-start leading-6  '>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                      clear as day: to shape the future. Whether you're a coding genius, a 
                      design maverick, or a concept wizard, you'll have the chance to transform 
                      your ideas into reality. Solving real-world problems, pushing the boundaries
                      of technology, and creating solutions that can change the world,
                      that's what we're all about!</p>
               </motion.div>
               <div className='w-full'>
                   <div className='hidden md:block md:ml-52 md:mt-5 lg:ml-96 lg:mt-8'>
                    <motion.img
                      initial={{x:-100, opacity: 0}}
                      whileInView={{x:0, opacity: 1}}
                      transition={{delay: 1, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='' src={Ellipse} alt='ellipse' />
                   </div>
                   <div className='absolute  xs:top-10 md:top-12 lg:top-10 lg:-right-10'>
                    <motion.img 
                      initial={{y:-100, opacity: 0}}
                      whileInView={{y:0, opacity: 1}}
                      transition={{delay: 0.6, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='' src={womanIpad} alt='ellipse' />
                   </div>
               </div>
                  
            </div>
          
        </div>
        <p className='border-b border-slate-300 xs:mt-32  lg:mt-72'></p>
   </div>
  )
}

export default Rules