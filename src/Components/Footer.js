import React from 'react'
import line4 from '../assets/Line 4.png'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import sata from '../assets/sata gra.png'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'


const Footer = () => {
  return (
    <div className='w-full text-white font-titleFont py-5 relative'>
        <div className='lg:w-10/12 lg:mx-auto w-full xs:px-4 flex flex-col md:flex-row md:justify-between md:items-center py-6'>
              <div className='lg:w-6/12 w-full'>
                <h1 className='lg:text-2xl xs:text-xl font-extrabold'>get<span className='text-primeColor'>linked</span></h1>
                <div className='mt-5'>
                <p className='text-xs w-full md:w-96'>Getlinked Tech Hackathon is a technology innovation program 
                  established by a group of organizations with the aim of showcasing 
                  young and talented individuals in the field of technology</p>
                </div>
                <div className='lg:mt-20 xs:mt-10 flex gap-8 items-center text-sm'>
                  <div className=''>
                  <h3>Terms of Use </h3>  
                  </div>
                  <div>
                  <img className='h-6' src={line4} alt='line' />
                  </div>
                  <div className=''>
                  <h3> Privacy Policy</h3>
                  </div>
                  
                </div>
               
              </div>
            <div className='lg:w-6/12 w-full flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className='lg:mt-5 xs:mt-10'>
                <h2 className='font-semibold text-lg text-primeColor'>Useful Links</h2>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xs'><a href='/#'>Overview</a></li>
                        <li className='text-xs'><a href='/#'>Timeline</a></li>
                        <li className='text-xs'><a href='/#'>FAQs</a></li>
                        <li className='text-xs'><a href='/#'>Register</a></li>
                    </ul>
                </div>
                <div className='lg:mt-10 xs:mt-5 flex items-center gap-2'>  
                    <h3 className='text-primeColor'>Follow us</h3>
                       <div className='flex lg:gap-2 xs:gap-4 items-center'>
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook/>
                        <FaLinkedin />
                       </div>
                </div>
              </div>
              <div className='xs:mt-10 lg:mt-0'>
                <h2 className='text-primeColor text-lg font-semibold'>Contact us</h2>
                <div className='flex items-center gap-3 mt-2'> 
                  <FaPhone/>
                  <p className='text-xs'>+234 8045367389</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <div className='mt-10'>
                  <p className='text-xs'>27, Alara Street</p>
                   <p className='text-xs'> Yaba 100012 </p>
                    <p className='text-xs'> Lagos State</p>
                  </div>
               
                </div>
              
              </div>
           </div>
        </div>
        <div className='absolute top-24 left-10'>
          <img className='w-4' src={star} alt='star' /> 
        </div>
        <div className='absolute top-60 right-36'>
          <img className='w-4' src={star} alt='star' />
        </div>
        <div className='absolute left-2/4 top-72'>
          <img className='4' src={sata} alt='star' />
        </div>
        <div className='absolute top-20 right-72'>
          <img className='w-4' src={star1} alt='star' />
        </div>
        <div className='lg:mt-20  sm:mt-10 text-center'>
          <h2 className='text-xs'>All rights reserved. © getlinked Ltd.</h2>
        </div>
       
    </div>
  )
}

export default Footer