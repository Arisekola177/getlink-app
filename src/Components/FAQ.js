import React from 'react'
import { motion } from 'framer-motion'
import { question } from '../assets/index'
import starpu from '../assets/star pu.png'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'
import sata from '../assets/sata gra.png'
import { manAndQuestion } from '../assets/index'
const FAQ = () => {
  return (
    <div className='w-full relative mt-10'>
        <div className='md:w-10/12 md:mx-auto w-full xs:px-4 md:px-0 text-white font-titleFont grid grid-cols-1 md:grid-cols-2 md:gap-5 py-4'>
               <motion.div 
                initial={{y:-100, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                ease:'easeInOut', duration: 1}}
               className='mt-10 w-full'>
                   <h1 className='lg:text-2xl xs:text-xl xs:text-center md:text-start font-extrabold mb-2'>Frequently Ask</h1> 
                       <h1 className='lg:text-2xl xs:text-xl xs:text-center md:text-start  font-extrabold text-primeColor'>Question</h1>
                       <p className='mt-5 lg:text-sm xs:text-xs xs:text-center md:text-start '>We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0</p>
                       <div className='mt-10 '>
                        <div className='lg:w-5/6 w-full flex justify-between items-center'>
                        <p className='text-start lg:text-sm xs:text-xs '>Can I work on a project I started before the hackathon?  </p>
                        <p className='text-xl text-primeColor'>+</p>
                        </div>
                        <p className=' lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        <div className='lg:w-5/6 w-full mt-5 flex justify-between items-center'>
                        <p className='lg:text-sm xs:text-xs'>What happens if I need help during the hackathon? </p>
                        <p className='text-xl text-primeColor'>+</p>
                        </div>
                        <p className='lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        <div className='lg:w-5/6 w-full mt-5 flex justify-between items-center'>
                        <p className='lg:text-sm xs:text-xs' >What happens if I don't have an idea for a project?</p> 
                        <span className='text-xl text-primeColor '>+</span>
                        </div>
                        <p className='lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        <div className='lg:w-5/6 w-full mt-5 flex justify-between items-center'>
                        <p className='lg:text-sm xs:text-xs' > Can I join a team or do I have to come with one? </p>
                        <span className='text-xl text-primeColor'>+</span>
                        </div>
                        <p className='lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        <div  className='lg:w-5/6 w-full mt-5 flex justify-between items-center'>
                        <p className='lg:text-sm xs:text-xs'> What happens after the hackathon ends? </p>
                        <span className='text-xl text-primeColor'>+</span>
                        </div>
                       
                        <p className='lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        <div className='lg:w-5/6 w-full mt-5 flex justify-between items-center '>
                        <p className='lg:text-sm xs:text-xs'>Can I work on a project I started before the hackathon? </p>
                        <span className='text-xl text-primeColor ml-5'>+</span>
                        </div>
                        <p className='lg:w-5/6 w-full border-b border-primeColor mt-5'></p>
                        </div>
                </motion.div> 
                <div className='w-full'>
                    <div className='lg:ml-20 xs:mr-6 sm:mr-20 sml:mr-24 lg:mr-0 ml-0 flex items-center justify-between '>  
                    <motion.img
                     initial={{y:-100, opacity: 0}}
                     animate={{y:0, opacity: 1}}
                     transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                     ease:'easeInOut', duration: 1}}
                    className='mt-20  xs:w-12' src={question} alt='question' />
                    <motion.img
                      initial={{x:-100, opacity: 0}}
                      animate={{x:0, opacity: 1}}
                      transition={{delay: 0.1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='w-12' src={question} alt='question' />
                    <motion.img
                      initial={{y:-100, opacity: 0}}
                      animate={{y:0, opacity: 1}}
                      transition={{delay: 0.5, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='mt-20 w-12' src={question} alt='question' />
                    </div>
                    <div>
                        <motion.img 
                          initial={{y:-100, opacity: 0}}
                          whileInView={{y:0, opacity: 1}}
                          transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                          ease:'easeInOut', duration: 1}}
                        src={manAndQuestion} alt='question' />
                    </div>
                  
                </div>
        </div>
        <div>
          <div className='absolute top-52 left-2/4 ml-28'>
            <img src={sata} alt='sata' />
          </div>
          <div className='absolute right-48 '>
            <img src={star} alt='sata' />
          </div>
          <div className='absolute top-80 ml-60 left-96'>
            <img src={star1} alt='sata' />
          </div>
          <div className='absolute top-5 left-16'>
            <img src={starpu} alt='sata' />
          </div>
          <div className='absolute top-28 right-52'>
            <img src={sata} alt='sata' />
          </div>
        </div>
        <p className='border-b border-slate-300 mt-16'></p>
    </div>
  )
}

export default FAQ