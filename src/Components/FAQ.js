import React from 'react'
import { question } from '../assets/index'
import starpu from '../assets/star pu.png'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'
import sata from '../assets/sata gra.png'
import { manAndQuestion } from '../assets/index'
const FAQ = () => {
  return (
    <div className='w-full relative mt-10'>
        <div className='w-10/12 mx-auto text-white font-titleFont grid grid-cols-2 py-4'>
               <div className='mt-10 w-full'>
                   <h1 className='text-2xl font-extrabold mb-2'>Frequently Ask</h1> 
                       <h1 className='text-2xl font-extrabold text-primeColor'>Question</h1>
                       <p className='mt-5'>We got answers to the questions that you might</p>
                       <p> want to ask about getlinked Hackathon 1.0</p>
                       <div className='mt-10'>
                        <div className='w-5/6 flex justify-between items-center'>
                        <p className=''>Can I work on a project I started before the hackathon?  </p>
                        <p className='text-xl text-primeColor'>+</p>
                        </div>
                        <p className=' w-5/6 border-b border-primeColor mt-5'></p>
                        <div className='w-5/6 mt-5 flex justify-between items-center'>
                        <p>What happens if I need help during the hackathon? </p>
                        <p className='text-xl text-primeColor'>+</p>
                        </div>
                        <p className='w-5/6 border-b border-primeColor mt-5'></p>
                        <div className='w-5/6 mt-5 flex justify-between items-center'>
                        <p  >What happens if I don't have an idea for a project?</p> 
                        <span className='text-xl text-primeColor '>+</span>
                        </div>
                        <p className='w-5/6 border-b border-primeColor mt-5'></p>
                        <div className='w-5/6 mt-5 flex justify-between items-center'>
                        <p  > Can I join a team or do I have to come with one? </p>
                        <span className='text-xl text-primeColor'>+</span>
                        </div>
                        <p className='w-5/6 border-b border-primeColor mt-5'></p>
                        <div  className='w-5/6 mt-5 flex justify-between items-center'>
                        <p> What happens after the hackathon ends? </p>
                        <span className='text-xl text-primeColor'>+</span>
                        </div>
                       
                        <p className='w-5/6 border-b border-primeColor mt-5'></p>
                        <div className='w-5/6 mt-5 flex justify-between items-center '>
                        <p >Can I work on a project I started before the hackathon? </p>
                        <span className='text-xl text-primeColor ml-5'>+</span>
                        </div>
                        <p className='w-5/6 border-b border-primeColor mt-5'></p>
                        </div>
                </div> 
                <div className='w-full'>
                    <div className='ml-20 flex items-center justify-between '>  
                    <img className='mt-20' src={question} alt='question' />
                    <img src={question} alt='question' />
                    <img className='mt-20' src={question} alt='question' />
                    </div>
                    <div>
                        <img  src={manAndQuestion} alt='question' />
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