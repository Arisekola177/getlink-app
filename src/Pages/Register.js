import React, { useState } from 'react'
import designer from '../assets/3d-graphic-designer-showing-thumbs-up-png 1.png'
import woman from '../assets/image_processing20200511-10310-13mnlsx.png'
import man from '../assets/1f6b6-2640.png'
import line9 from '../assets/Line 9 hori.png'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import congrat from '../assets/congratulation.png'
import happy from '../assets/1531010992wink-emoji-woman-png 1.png'
import { Link } from 'react-router-dom'


const SuccessMessage = () => {
    return (
      <div className="w-96 border border-primeColor rounded-md mx-auto sm:mb-16  bg-opacity-60">
        <div className=" p-8 rounded-md text-center" >
              <img src={congrat} alt='success' />
              <div className='mt-5'>
                <h1 className='font-semibold text-lg '>Congratulations </h1>
                  <h1 className='font-semibold text-lg mb-4 '> you have successfully Registered!</h1>
                  <div>
                  <p className='text-xs mb-5 w-5/6 mx-auto '>Yes, it was easy and you did it!
                      check your mail box for next step <span className='inline-block'> <img className='mt-1' src={happy} alt='happy' /></span></p>
                  
                  </div>
                   
              </div>
              <div className=' bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md sm:mx-auto md:mx-0'>
                <Link to='/'>
                         <button className='text-xs cursor-pointer py-3 px-8'>Back</button>
                         </Link>
                </div>
        </div>
      
      </div>
    );
  };


const Register = () => {
    const [category, setCategory] = useState('');
    const [groupSize, setGroupSize] = useState('')
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm();
    const {register, control, handleSubmit, reset} = form;

     const onSubmit = async (data) => {
        try {
            setLoading(true);
            const requestData = { ...data, category, groupSize };
            console.log('Data submitted successfully:', requestData);
            // Simulating an asynchronous request (replace with your actual API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setRegistrationSuccess(true);
            reset();
          } catch (error) {
            console.error('Error submitting data:', error.message);
          } finally {
            setLoading(false);
          }
           
    }
  return (
    <div className={`w-full text-white font-titleFont mb-10 ${registrationSuccess ? 'bg-black' : ''}`}>
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className='hidden md:block w-full mt-16'>
               <img className='w-full' src={designer} alt='designer' />
            </div>
            <div className='w-full shadow-2xl border border-none rounded-md mt-16'>
            {registrationSuccess ? (
            <SuccessMessage />
          ) : (
            <>
                  <h1 className='text-3xl text-primeColor font-bold'>Register</h1>
                  <div className='block  md:hidden'>
                  <img className='w-2/3 mx-auto' src={designer} alt='designer' />
                  </div>
               
                  <div className='flex gap-2 items-center mt-6 mb-8'>
                  <p className='mt-4 text-xs'>Be part of this movement!</p>
                  <div>
                    <div className='flex  ml-3  items-center'>
                    <img src={man} alt='man' />
                    <img src={woman} alt='woman' />
                    
                    </div>
                     <img src={line9} alt='line' />
                  </div>
                  </div>
                  <h1 className='text-2xl mb-7'>CREATE YOUR ACCOUNT</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                      <div className='flex flex-col md:flex-row md:justify-between sm:gap-4 lg:gap-8 md:items-center mb-5'>
                         <div className='w-full'>
                             <label className='text-sm ' htmlFor='Team name'>Team Name</label>
                             <input className='w-full mt-2 px-5  bg-secColor border-white border text-sm py-2 outline-none text-white' type='text' id='Team name' placeholder='Enter name of your group' {...register('Team Name')} />
                         </div>
                         <div className='w-full'>
                             <label className='text-sm ' htmlFor='Phone'>Phone</label>
                             <input className='w-full  mt-2  px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' type='number' id='Phone' placeholder='Enter your phone number' {...register('Phone')} />
                         </div>
                      </div>
                      <div className='flex flex-col md:flex-row md:justify-between sm:gap-4 lg:gap-8 md:items-center mb-5'>
                         <div className='w-full'>
                             <label className='text-sm ' htmlFor='Email'>E-mail</label>
                             <input className='w-full  mt-2  px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' type='email' id='email' placeholder='Enter your email address' {...register('Email')} />
                         </div>
                         <div className='w-full'> 
                             <label className='text-sm ' htmlFor='Topic'>Project Topic</label>
                             <input className='w-full  mt-2  px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' type='text' id='topic' placeholder='What is your group project topic' {...register('Topic')} />
                         </div>
                         </div>
                         <div className='flex justify-between gap-8 items-center mb-5'>
                             <div className='w-full'>
                                <label className='text-sm ' htmlFor='category'>Category</label>
                                <select className='block  mt-2  w-full px-2 bg-secColor border-white border text-sm py-2 outline-none text-white' value={category}  onChange={(e) => setCategory(e.target.value)} {...register('Category')}>
                                   <option value={category}>Select your category</option>
                                   <option value={category}>1</option>
                                   <option value={category}>2</option>
                                </select>
                               
                             </div>
                             <div className='w-full'>
                                <label className='text-sm ' htmlFor='group'>Group Size</label>
                                <select className='block mt-2 w-full px-5 bg-secColor border-white border text-sm py-2 outline-none text-white' value={groupSize}
                                    onChange={(e) => setGroupSize(e.target.value)} {...register('Group Size')}> 
                                    <option>Select</option>
                                    <option>10</option>
                                   
                                </select>
                              
                             </div>
                            </div>
                       
                      </div>
                         <p className='text-xs text-primeColor'>Please review your registration details before submitting</p>   
                         <div className='flex items-center gap-2 mt-4'>
                            <input type='checkbox' {...register('checkbox')}/>
                            <p className='text-xs'>I agreed with the event terms and conditions  and privacy policy</p>
                         </div>
                         <div className='sm:w-36 lg:w-full cursor-pointer mt-5 text-center bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md sm:mx-auto md:mx-0'>
                         <button type="submit" className="hidden md:block mx-auto text-xs py-3 px-8"disabled={loading}>Register Now</button>
                         <button  type="submit" className="block md:hidden mx-auto text-xs py-3 px-8" disabled={loading} >Submit</button>
                         </div>
                     
                  </form>
                 
                  <DevTool control={control} />
                  </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Register