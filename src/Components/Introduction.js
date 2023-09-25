import React from 'react'
import { bigIdea } from '../assets/index'
import { arrow } from '../assets/index'
import sata from '../assets/sata gra.png'
import starpu from '../assets/star pu.png'
const Introduction = () => {
  return (
    <div className='w-full relative mt-10'>
        <div className='w-10/12 mx-auto flex justify-between font-titleFont text-white '>
          <div className='w-2/4'>
              <img className='' src={bigIdea} alt='bigIdea' />
            
               </div>
               <div className='w-2/4 mt-36 ml-16'>
                  <h1 className='font-extrabold text-2xl'>Introduction to getlinked </h1>
                  <p className='text-primeColor text-2xl font-bold mt-2'>tech Hackalton 1.0</p>
                  <p className='text-sm mt-5'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
               </div>
        </div>
        <div className='absolute top-96 left-96 ml-48 mt-10'>
              <img src={arrow} alt='arrow' />
              </div>
              <div className='absolute top-40 left-20'>
              <img src={sata} alt='arrow' />
              </div>
              <div className='absolute top-40 right-20'>
              <img src={starpu} alt='arrow' />
              </div>
        <p className='border-b border-slate-300 mt-10'></p>
    </div>
  )
}

export default Introduction