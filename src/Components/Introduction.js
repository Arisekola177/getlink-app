import React from 'react'
import { motion } from 'framer-motion'
import { bigIdea } from '../assets/index'
import { arrow } from '../assets/index'

const Introduction = () => {
  return (
    <div className='w-full relative mt-10'>
        <div className='xs:w-full md:w-10/12 md:mx-auto flex flex-col md:flex-row md:justify-between font-titleFont text-white '>
          <div className='lg:w-2/4 xs:w-full xs:p-4'>
              <motion.img
                initial={{y:-100, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.5, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                ease:'easeInOut', duration: 1}}
              className='' src={bigIdea} alt='bigIdea' />
            
               </div>
               <div className='lg:w-2/4 sm:w-full sm:mt-16 lg:mt-36 lg:ml-16'>
                  <motion.h1 
                    initial={{y:-100, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                    ease:'easeInOut', duration: 1}}
                  className='font-extrabold xs:text-center sm:text-xl lg:text-2xl'>Introduction to getlinked </motion.h1>
                  <motion.p 
                     initial={{x:-100, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     transition={{delay: 0.6, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                     ease:'easeIn', duration: 1}}
                  className='text-primeColor xs:text-center sm:text-xl lg:text-2xl font-bold mt-2'>tech Hackalton 1.0</motion.p>
                  <motion.p
                    initial={{x:-100, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.8, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                    ease:'easeIn', duration: 1}}
                   className='sm:w-80 xs-w-full xs:mx-auto lg:w-full lg:text-sm xs:text-xs mt-5 xs:px-2 sm:px-0 xs:text-start sm:text-center'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</motion.p>
               </div>
        </div>
        <div className='absolute sm:top-80 sm:mt-16 sm:left-52 lg:top-96 lg:left-96 lg:ml-48 lg:mt-10'>
              <img className='sm:w-2/3 lg:w-full' src={arrow} alt='arrow' />
              </div>
             
        <p className='border-b border-slate-300 mt-10'></p>
    </div> 
  )
}

export default Introduction