import React from 'react'
import { motion } from 'framer-motion'
import { Ellipse } from '../assets/index'
import { manAndWoman } from '../assets/index'
import starpu from '../assets/star pu.png'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'
const Criteria = () => {
  return (
    <div className='w-full relative '>
        <div className='lg:w-10/12 lg:mx-auto w-full xs:px-3 text-white font-titleFont grid xs:grid-cols-1 md:grid-cols-2 md:gap-24 py-4'>
             <div className='hidden md:block w-full md:mt-32 md:ml-8 lg:ml-0  lg:mt-36'> 
               <motion.img 
                  initial={{x:-200, opacity: 0}}
                 whileInView={{x:0, opacity: 1}}
                  transition={{delay: 0.6, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                  ease:'easeInOut', duration: 1}}
               className='' src={Ellipse} alt='ellipse' />
             </div>
             <div className='w-full lg:mt-28 md:mt-10 xs:mt-96 sml:mt-96 md:text-start xs:text-center'>
                <motion.h1 
                  initial={{y:-200, opacity: 0}}
                  whileInView={{y:0, opacity: 1}}
                  transition={{delay: 0.1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                  ease:'easeInOut', duration: 1}}
                className='lg:text-2xl xs:text-xl sml:mt-5 md:mt-0 mb-4 font-extrabold'>Judging Criteria</motion.h1>
                   <motion.h1
                     initial={{x:-100, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     transition={{delay: 0.3, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                     ease:'easeInOut', duration: 1}}
                   className='lg:text-2xl xs:text-xl mb-4 font-extrabold text-primeColor'>Key attributes</motion.h1>
                   <div className='lg:text-sm xs:text-xs xs:text-start'>
                   <p
                   className='mb-4'><motion.span
                   initial={{x:-100, opacity: 0}}
                   whileInView={{x:0, opacity: 1}}
                   transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                   ease:'easeInOut', duration: 1}}
                   className='text-bold text-primeColor'>Innovation and Creativity:</motion.span> Evaluate the uniqueness and creativity of the
                                        solution. Consider whether it addresses a real-world problem in a novel 
                                         way or introduces innovative features.</p>
                  <p className='mb-4'><motion.span
                    initial={{x:-100, opacity: 0}}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                    ease:'easeInOut', duration: 1}}
                  className='text-bold text-primeColor'>Functionality:</motion.span> Assess how well the solution works. Does it perform its 
                                        intended functions effectively and without major issues? Judges would
                                        consider the completeness and robustness of the solution.</p>
                 <p className='mb-4'><motion.span 
                  initial={{x:-100, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                  ease:'easeInOut', duration: 1}}
                 className='text-bold text-primeColor'>Impact and Relevance:</motion.span> Determine the potential impact of the solution 
                                              in the real world. Does it address a significant problem, and is it relevant 
                                              to the target audience? Judges would assess the potential social, 
                                              economic, or environmental benefits.</p>
                 <p className='mb-4'><motion.span 
                   initial={{x:-100, opacity: 0}}
                   whileInView={{x:0, opacity: 1}}
                   transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                   ease:'easeInOut', duration: 1}}
                 className='text-bold text-primeColor'>Technical Complexity:</motion.span> Evaluate the technical sophistication of the solution. 
                                              Judges would consider the complexity of the code, the use of advanced 
                                              technologies or algorithms, and the scalability of the solution.</p>
                 <p className='mb-4'><motion.span
                   initial={{x:-100, opacity: 0}}
                   whileInView={{x:0, opacity: 1}}
                   transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                   ease:'easeInOut', duration: 1}}
                  className='text-bold text-primeColor'>Adherence to Hackathon Rules:</motion.span> Judges will Ensure that the team adhered 
                                              to the rules and guidelines of the hackathon, including deadlines, use of 
                                              specific technologies or APIs, and any other competition-specific requirements.</p>
                                              </div>
               <motion.div 
                 initial={{y:-100, opacity: 0}}
                 animate={{y:0, opacity: 1}}
                 transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                 ease:'easeInOut', duration: 1}}
               className='w-36 bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md sm:mx-auto md:mx-0'>
                         <button 
                      className='text-xs cursor-pointer py-3 px-8'>Read More</button>
                </motion.div>
             </div>

        </div>
        <div className='absolute xs:top-10 md:top-48 md:-left-5 md:px-2 lg:top-52 lg:left-8 lg:px-0'>
        <motion.img
           initial={{y:-200, opacity: 0}}
           whileInView={{y:0, opacity: 1}}
           transition={{delay: 1, y:{type:'spring', stiffness: 60},
            opacity:{duration:1}, 
           ease:'easeInOut', duration: 1}}
        className='lg:w-5/6 md:w-2/3 xs:w-full' src={manAndWoman} alt='man' />
        </div>
        <div className='absolute top-20 left-40'>
          <img src={starpu} alt='star' />
        </div>
        <div className='absolute top-2/4 mt-20 left-80 ml-10'>
          <img src={star1} alt='star' />
        </div>
        <div className='absolute top-3/4 mt-16 left-96 ml-40'>
          <img src={star} alt='star' />
        </div>
        <p className='border-b border-slate-300 mt-16'></p>
    </div>
  )
}

export default Criteria