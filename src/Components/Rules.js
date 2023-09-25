import React from 'react'
import { womanIpad } from '../assets/index'
import { Ellipse } from '../assets/index'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'
const Rules = () => {
  return (
    <div className='w-full relative mt-10 overflow-hidden'>
        <div className='w-10/12 mx-auto text-white grid grid-cols-2 font-titleFont'>
             <div className='w-full mt-36 '>
                <h1 className='text-2xl font-extrabold '>Rules and</h1>
                 <h1 className='text-2xl font-extrabold text-primeColor'> Guidelines</h1>
                 <p className='mt-5 text-sm w-5/6'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
             </div>
             <div className='w-full'>
                 <div className='ml-10 mt-24'>
                 <img className='mx-80 ' src={Ellipse} alt='ellipse' />
                 </div>
              
                 <div className='absolute top-0 -right-0'>
                <img className='' src={womanIpad} alt='ipad' />
                </div>
                <div className='absolute top-24 left-96'>
                  <img src={star1} alt='star' />
                </div>
                <div className='absolute top-96 '>
                  <img src={star} alt='star' />
                </div>
                </div>
        </div>
        <p className='border-b border-slate-300 mt-72'></p>
    </div>
  )
}

export default Rules