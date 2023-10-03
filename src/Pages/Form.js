import React from 'react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const Form = () => {

    const form = useForm()
    const {register, control, handleSubmit} = form;

    const onSubmit = (data) => {
        console.log('form submiited', data)
    }

  return (
    <div className='w-full text-white font-titleFont'>
        <div className='w-10/12 mx-auto '>
            <div className='mb-5 w-full'>
                   <form onSubmit={handleSubmit (onSubmit)}>
                    <div className='flex flex-col mb-5'>
                     
                       <input className='text-black' type='text' id='username' {...register('username')} />
                    </div>
                    <div className='flex flex-col mb-5'>
                      <lable htmlFor='email'>Email</lable>
                       <input type='text' id='email' {...register('email')} />
                    </div>
                    <div className='flex flex-col mb-5'>
                      <lable htmlFor='message'>Message</lable>
                       <textarea type='text' id='message' {...register('message')} />
                    </div>
                         <button>Submit</button>
                   </form>
                   <DevTool control={control} />
            </div>
        </div>
    </div>
  )
}

export default Form