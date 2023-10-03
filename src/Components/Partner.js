import React from 'react'


import { partnerSponsor } from '../assets/index'

const Partner = () => {
  return (
    <div className='w-full mt-28 relative'>
        <div className='w-10/12 mx-auto text-white font-titleFont'>
            <div className='text-center mb-16'> 
            <h1 className='md:text-2xl xs:text-xl font-extrabold mb-3'> Partners and Sponsors</h1>
              <p className='lg:text-sm xs:text-xs'>Getlinked Hackathon 1.0 is honored to have the following major 
                 companies as its partners and sponsors</p>
            </div>
              <div>
                <img className='' src={partnerSponsor} alt='partners' />
              </div>
        </div>
      
        <p className='border-b border-slate-300 mt-20'></p>
    </div>
  )
}

export default Partner