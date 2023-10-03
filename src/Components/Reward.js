import React from 'react'
import { goldCup } from '../assets/index'
import { reward } from '../assets/index'

import { motion } from 'framer-motion'

const Reward = () => {
  return (
    <div className='w-full mt-36 relative mb-36 text-white font-titleFont'>
     
                <div className='w-10/12 mx-auto '>
                   <motion.div 
                     initial={{x:-100, opacity: 0}}
                     whileInView={{x:0, opacity: 1}}
                     transition={{delay: 0.4, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                     ease:'easeInOut', duration: 1}}
                   className='flex justify-between items-center'>
                   <div>

                   </div>
                  <div className='xs:text-start sm:text-center'>
                 <h1 className='lg:text-2xl xs:text-xl font-extrabold mb-1'>Prizes and </h1>
                <h1 className='lg:text-2xl xs:text-xl font-extrabold text-primeColor mb-2'>Rewards</h1>
              <p className='sm:text-center lg:text-sm xs:text-xs  md:text-start'>Highlight of the prizes or rewards for winners and
              for participants</p>
              </div>
                   </motion.div>
              
         <div className=' flex mt-20 flex-col md:flex-row md:justify-between gap-10 md:items-center '>
            <div className='lg:w-2/4 w-full'>
            <motion.img 
              initial={{x:-50, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{delay: 0.5, x:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
              ease:'easeInOut', duration: 1}}
            className=''src={goldCup} alt='goldcup' />
            </div>
              <div className='lg:w-2/4 w-full'>
                    <div className='mt-10'>  
                <motion.img 
                  initial={{y:-100, opacity: 0}}
                  animate={{y:0, opacity: 1}}
                  transition={{delay: 1, y:{type:'spring', stiffness: 60}, opacity:{duration:1}, 
                  ease:'easeInOut', duration: 1}}
                className='' src={reward} alt='rewrd '/>
                    </div>
              </div>
        </div>
       
        </div>
    </div>
  )
}

export default Reward