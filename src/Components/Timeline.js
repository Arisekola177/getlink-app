import React from 'react'
import No1 from '../assets/No 1.png'
import No2 from '../assets/No 2.png'
import line3 from '../assets/Line 3.png'
import line4 from '../assets/Line 4.png'
import line5 from '../assets/Line 5.png'
import No3 from '../assets/No 3.png'
import line6 from '../assets/Line 6.png'
import No4 from '../assets/No 4.png'
import line7 from '../assets/Line 7.png'
import No5 from '../assets/No 5.png'
import line8 from '../assets/Line 8.png'
import No6  from '../assets/No 6.png'

import line9 from '../assets/Line 9.png'
import line10 from '../assets/Line 10.png'
import line11 from '../assets/Line 11.png'
import line12 from '../assets/Line 12.png'
import line13 from '../assets/Line 13.png'
import line14 from '../assets/Line 14.png'
import { motion } from 'framer-motion'
 
const Timeline = () => {
  return (
    <div className='w-full relative mb-10'>
        <div className='md:w-10/12 md:mx-auto w-full xs:px-4 md:px-0 text-white font-titleFont text-center mt-10'>
                <h1 className='lg:text-2xl xs:text-xl font-extrabold mb-2'> Timeline</h1>
                <p className='lg:text-sm xs:text-xs'>Here is the breakdown of the time we anticipate
                   using for the upcoming event.</p>
                  <div className='hidden md:flex flex-col mt-20'>
                    <motion.div 
                       initial={{y:-100, opacity: 0}}
                       whileInView={{y:0, opacity: 1}}
                       transition={{delay: 0.1, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                       ease:'easeInOut', duration: 1}}
                    className='flex justify-between  items-center'>
                        <div className='w-5/12 mt-10'>
                            <h1 className='font-bold text-xl mb-2 text-primeColor'>Hackathon Announcement</h1>
                            <p className='lg:text-sm md:text-xs'>The getlinked tech hackathon 1.0 is formally announced
                               to the general public and teams begin to get ready to register</p>
                        </div>
                        <div className='ml-16 lg:mb-2 md:mb-1'>
                             <img className='ml-6 mb-2' src={line3} alt='line' />
                             <img src={No1} alt='number' />
                        </div>
                        <div className='w-5/12 mt-16'>
                            <h2  className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                        </div>
                    </motion.div>
                    <motion.div 
                      initial={{x:-100, opacity: 0}}
                      animate={{x:0, opacity: 1}}
                      transition={{delay: 0.3, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='flex justify-between items-center'>
                        <div className='w-5/12 mt-16'>
                        <h2 className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                          
                        </div>
                        <div className='ml-16 lg:mb-2 md:mb-1 '>
                             <img className='ml-6 mb-2' src={line4} alt='line' />
                             <img src={No2} alt='number' />
                        </div>
                        <div className='w-5/12 lg:mt-10 md:mt-2 md:px-4'>
                            <h2 className='font-bold text-xl mb-2 text-primeColor'>Teams Registration begins</h2>
                            <p  className='lg:text-sm md:text-xs'>Interested teams can now show their interest in the
                             getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                    </motion.div>
                    <motion.div 
                      initial={{y:-100, opacity: 0}}
                       animate={{y:0, opacity: 1}}
                      transition={{delay: 0.5, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='flex justify-between items-center'>
                        <div className='w-5/12 lg:mt-10 md:mt-5'>
                            <h1 className='font-bold text-xl mb-2 text-primeColor'>Teams Registration ends</h1>
                            <p  className='lg:text-sm md:text-xs'>Interested Participants are no longer Allowed to
                               register</p>
                        </div>
                        <div className='ml-16 lg:mb-2 md:mb-1'>
                             <img className='ml-6 mb-2' src={line5} alt='line' />
                             <img src={No3} alt='number' />
                        </div>
                        <div className='w-5/12 mt-16 '>
                            <h2 className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                        </div>
                    </motion.div>
                    <motion.div 
                     initial={{x:-100, opacity: 0}}
                     animate={{x:0, opacity: 1}}
                     transition={{delay: 0.7, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                     ease:'easeInOut', duration: 1}}
                    className='flex justify-between items-center'>
                        <div className='w-5/12 lg:mt-16 md:mt-5'>
                        <h2 className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                        </div>
                        <div className='ml-16 lg:mb-2 md:mb-1 md:px-2'>
                             <img className='ml-6 mb-2' src={line6} alt='line' />
                             <img src={No4} alt='number' />
                        </div>
                        <div className='w-5/12 lg:mt-10 md:mt-5'>
                          
                            <h1 className='font-bold text-xl mb-2 text-primeColor text-center'>Announcement of the accepted team and ideas</h1>
                            <p  className='lg:text-sm md:text-xs'>All teams whom idea has been accepted into getlinked tech
                               hackathon 1.0 2023 are formally announced</p>
                        </div>
                    </motion.div>
                    <motion.div
                      initial={{y:-100, opacity: 0}}
                      animate={{y:0, opacity: 1}}
                      transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='flex justify-between items-center'>
                        <div className='w-5/12 lg:mt-10 md:mt-5'>
                            <h1 className='font-bold text-xl mb-2 text-primeColor text-start'>Getlinked Hackathon 1.0 Offically Begins</h1>
                            <p  className='lg:text-sm md:text-xs'>Accepted teams can now proceed to build their
                               ground breaking skill driven solutions</p>
                        </div>
                        <div className='ml-16 lg:mb-2 md:mb-1'>
                             <img className='ml-6 mb-2' src={line7} alt='line' />
                             <img src={No5} alt='number' />
                        </div>
                        <div className='w-5/12 mt-16'>
                            <h2 className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                        </div>
                    </motion.div>
                    <motion.div 
                      initial={{x:-100, opacity: 0}}
                      animate={{x:0, opacity: 1}}
                      transition={{delay: 1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                      ease:'easeInOut', duration: 1}}
                    className='flex justify-between items-center'>
                        <div className='w-5/12 lg:mt-16 md:mt-5'>
                        <h2 className='font-bold text-xl text-primeColor'>November 18, 2023</h2>
                        </div>
                        <div className='ml-16 '>
                             <img className='ml-6 mb-2' src={line8} alt='line' />
                             <img src={No6} alt='number' />
                        </div>
                        <div className='w-5/12 mt-10'>
                          
                            <h1 className='font-bold text-xl mb-2 text-primeColor'>Demo Day</h1>
                            <p  className='lg:text-sm md:text-xs'>Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day</p>
                        </div>
                    </motion.div>
                 
                  </div>  

                  <div className='block mt-10 md:hidden'>
                      <motion.div 
                          initial={{y:-100, opacity: 0}}
                          animate={{y:0, opacity: 1}}
                          transition={{delay: 0.1, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                          ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6'>
                         <div>
                            <img className='xs:ml-1 xs:h-24 sm:h-full xs:mb-1 sm:ml-2 sml:ml-4 sml:mb-2' src={line9} alt='line' />
                            <img className='' src={No1} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs sm:mb-2 xs:mb-1  text-primeColor'>Hackathon Announcement</h1>
                             <p className='text-xs'>The getlinked tech hackathon 1.0 is formally announced to the general 
                                public and teams begin to get ready to register</p>
                                <h2 className='font-bold sm:mt-2 xs:mt-1 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                      <motion.div 
                         initial={{x:-100, opacity: 0}}
                         animate={{x:0, opacity: 1}}
                         transition={{delay: 0.3, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                         ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6 sm:mt-2 xs:mt-1'>
                         <div >
                            <img className='xs:ml-1 xs:h-24 sm:h-full  xs:mb-1 sm:ml-2 sml:ml-4 sml:mb-2' src={line10} alt='line' />
                            <img className='' src={No2} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs sm:mb-2 xs:mb-1 text-primeColor'>Teams Registration begins</h1>
                             <p className='text-xs'>Interested teams can now show their interest 
                                   in the getlinked tech hackathon 1.0 2023 by 
                                    proceeding to register </p>
                                <h2 className='font-bold mt-2 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                      <motion.div
                         initial={{y:-100, opacity: 0}}
                         animate={{y:0, opacity: 1}}
                        transition={{delay: 0.5, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                        ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6 mt-2'>
                         <div >
                            <img className='xs:ml-1 xs:h-24 sm:h-full  xs:mb-1 sm:ml-2 sml:ml-4 sml:mb-2' src={line11} alt='line' />
                            <img className='w-8 xs:w-7' src={No3} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs mb-2 text-primeColor'>Teams Registration ends</h1>
                             <p className='text-xs'>Interested Participants are no longer Allowed
                                     to register</p>
                                <h2 className='font-bold mt-2 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                      <motion.div
                         initial={{x:-100, opacity: 0}}
                         animate={{x:0, opacity: 1}}
                         transition={{delay: 0.7, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                         ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6 mt-2'>
                         <div >
                            <img className='xs:ml-1 xs:h-24 sm:h-full  xs:mb-1 sm:ml-2 sml:ml-4 sml:mb-2' src={line12} alt='line' />
                            <img className='' src={No4} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs mb-2 text-primeColor'>Announcement of the accepted teams
                                     and ideas</h1>
                             <p className='text-xs'>All teams whom idea has been accepted into 
                                             getlinked tech hackathon 1.0 2023 are formally 
                                                   announced</p>
                                <h2 className='font-bold mt-2 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                      <motion.div 
                          initial={{y:-100, opacity: 0}}
                          animate={{y:0, opacity: 1}}
                          transition={{delay: 0.9, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                          ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6 mt-2'>
                         <div >
                            <img className='xs:ml-1 xs:h-24 sm:h-full  xs:mb-1 sm:ml-3 sml:ml-4 sml:mb-2' src={line13} alt='line' />
                            <img className='sml:w-12 xs:w-full' src={No5} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs mb-2 text-primeColor'>Getlinked Hackathon 1.0 Offically Begins</h1>
                             <p className='text-xs'>Accepted teams can now proceed to build 
                                       their ground breaking skill driven solutions</p>
                                <h2 className='font-bold mt-2 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                      <motion.div 
                        initial={{x:-100, opacity: 0}}
                        animate={{x:0, opacity: 1}}
                        transition={{delay: 1, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                        ease:'easeInOut', duration: 1}}
                      className='flex items-center gap-6 sml:mt-2 xs:mt-1'>
                         <div >
                            <img className='xs:ml-1 xs:h-24 sm:h-full  xs:mb-1 sm:ml-3 sml:ml-4 sml:mb-2' src={line14} alt='line' />
                            <img className='sml:w-16 xs:w-20' src={No6} alt='number1' />
                         </div>
                         <div>
                             <h1 className='font-bold text-xs mb-2 text-primeColor'>Demo Day</h1>
                             <p className='text-xs'>Teams get the opportunity to pitch their 
                                              projects to judges. The winner of the 
                                              hackathon will also be announced on this day</p>
                                <h2 className='font-bold mt-2 text-xs text-primeColor'>November 18, 2023</h2>
                         </div>
                      </motion.div>
                 </div>     
        </div>
        
        <p className='border-b border-none mt-20'></p>
    </div>
  )
}

export default Timeline