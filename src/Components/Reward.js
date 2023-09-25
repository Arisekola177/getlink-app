import React from 'react'
import { goldCup } from '../assets/index'
import { reward } from '../assets/index'
const Reward = () => {
  return (
    <div className='w-full mt-20'>
        <div className='w-10/12 mx-auto flex justify-between gap-10 items-center text-white font-titleFont'>
            <div className='w-2/4'>
            <img  className=''src={goldCup} alt='goldcup' />
            </div>
              <div className='w-2/4'>
                <div className='ml-20'>
                <h1 className='text-2xl font-extrabold mb-1'>Prizes and </h1>
                    <h1 className='text-2xl font-extrabold text-primeColor mb-2'>Rewards</h1>
                    <p>Highlight of the prizes or rewards for winners and for participants</p>
                </div>
              
                    <div className='mt-10'>
                       
                <img className='' src={reward} alt='rewrd '/>
                    </div>
              </div>
        </div>
        
    </div>
  )
}

export default Reward