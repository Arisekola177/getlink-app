import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white font-titleFont'>
        <div className='w-10/12 mx-auto flex justify-between items-center'>
              <div>
                <h1 className='text-2xl font-extrabold'>get<span className='text-primeColor'>linked</span></h1>
                <div className='mt-5 text-sm'>
                <p className=''>Getlinked Tech Hackathon is a technology innovation program </p>
                  <p>established by a group of organizations with the aim of showcasing </p>
                 <p>  young and talented individuals in the field of technology</p>
                </div>
                <div className='mt-20 flex justify-between items-center text-sm'>
                    <h3>Terms of Use </h3>  
                    <p className='border-r-4'></p>   
                    <h3> Privacy Policy</h3>
                </div>
               
              </div>
              <div>
                <h2 className='font-semibold text-lg text-primeColor'>Useful Links</h2>
                <div>
                    <ul>
                        <li><a href='/#'>Overview</a></li>
                        <li><a href='/#'>Timeline</a></li>
                        <li><a href='/#'>FAQs</a></li>
                        <li><a href='/#'>Register</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-primeColor'>Follow us</h3>

                </div>
              </div>
              <div>
                <h2 className='text-primeColor'>Contact us</h2>
                <p>+234 8045367389</p>
                <p>27, Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>
        </div>
    </div>
  )
}

export default Footer