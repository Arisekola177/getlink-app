import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';



const Contact = () => {
 
    const form = useForm();

    const {register, control, handleSubmit, reset} = form;

    const onSubmit = (data) => {
        console.log('Form Submitted', data)
        reset();
    }
   
  return (
    <div className='w-full text-white font-titleFont sm:mb-20 lg:mb-36'>
        <div className='md:w-9/12 md:mx-auto sm:w-full lg:mt-20 sm:mt-10 grid grid-cols-1 md:grid-cols-2'>
              <div className='hidden md:block mt-10 '>
                   <h2 className='text-3xl text-primeColor font-semibold mb-3'>Get in touch</h2>
                   <p className='text-base'>Contact</p>
                   <p className=' text-base mb-3'> Information</p>
                   <p className='text-base'>27,Alara Street</p>
                     <p  className='text-base'> Yaba 100012 </p>
                     <p  className='text-base mb-3'> Lagos State</p>
                     <p className='text-base mb-3'>Call Us : 07067981819</p>
                     <p className='text-base'>we are open from Monday-Friday </p>
                      <p className='text-base mb-3'>  08:00am - 05:00pm</p>
                       <p className='text-base text-primeColor mb-2 '>Share on</p>
                       <div className='flex items-center gap-4'>
                       <FaInstagram />
                        <FaTwitter />
                        <FaFacebook/>
                        <FaLinkedin />
                       </div>
              </div>
              <div className='w-full shadow-2xl border border-none rounded-md'>
                <div className='px-20 py-10'>
                <h1 className='text-primeColor text-xl font-semibold mb-1 '>Questions or need assistance?</h1>
                   <h1 className='text-primeColor text-xl font-semibold mb-2'> Let us know  about it!</h1>
                   <p className='block text-xs md:hidden'>Email us below to any question related 
                         to our event</p>
                    <div className='mt-5 '>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-5 w-full'>

                                <input className='hidden md:block w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' placeholder='First Name' type='text' id='First Name' {...register('First Name')} />
                                <input className=' block w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white md:hidden' placeholder='Teams Name' {...register('Team Name')} />
                            </div>
                            <div className='block mb-5 md:hidden'>
                                <input className='w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' placeholder='Topic' {...register('Topic')} />
                            </div>
                            <div className='mb-5'>
                                <input className='hidden md:block w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' placeholder='Mail' {...register('Mail')} />
                                <input className='block w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white md:hidden' placeholder='E-mail' {...register('E-mail')} />
                            </div>
                            <div>
                                <textarea className='w-full h-32 px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' placeholder='Message' {...register('Message')} />
                            </div>
                            <div className='w-32 mt-10 mx-auto bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md'>
                             <button className='text-xs cursor-pointer py-3 px-8'>Submit</button>
                            </div>
                            </form>
                            <DevTool control={control} />
                            <div className='block mt-5 md:hidden'>
                            <p className='text-base text-center text-primeColor mb-2 '>Share on</p>
                             <div className='flex items-center gap-4 justify-center'>
                              <FaInstagram />
                              <FaTwitter />
                               <FaFacebook/>
                               <FaLinkedin />
                             </div>  
                            </div>
                       
                    </div>

              </div>

                </div>
               
        </div>
    </div>
  )
}

export default Contact