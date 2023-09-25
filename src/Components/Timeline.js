import React from 'react'
import No1 from '../assets/No 1.png'
import No2 from '../assets/No 2.png'
import line3 from '../assets/Line 3.png'
import line4 from '../assets/Line 4.png'
import line5 from '../assets/Line 5.png'
import No3 from '../assets/No 3.png'
import line6 from '../assets/Line 6.png'
import No4 from '../assets/No 4.png'
 
const Timeline = () => {
  return (
    <div className='w-full relative'>
        <div className='w-10/12 mx-auto text-white font-titleFont text-center mt-10'>
                <h1 className='text-2xl font-extrabold mb-2'> Timeline</h1>
                <p>Here is the breakdown of the time we anticipate </p>
                  <p> using for the upcoming event.</p>
                  <div className='flex flex-col'>
                  <div className='mt-36 flex justify-between items-center'>
                    <div className=''>
                        <h2>Hackathon Announcement</h2>
                        <p>The getlinked tech hackathon 1.0 is formally announced</p>
                        <p> to the general public and teams begin to get ready to register</p>
                    </div> 
                    <div className='absolute top-28 left-1/3 ml-52'>
                      <img  className='ml-6 mb-2' src={line3} alt='line' />
                         <img className=''  src={No1} alt='number' />
                    </div>
                    <div className='mr-36'>
                         <h2>November 18, 2023</h2>
                    </div>
                  </div>
                  <div className='mt-20 flex justify-between items-center'>
                    <div className='ml-36'>
                        <h2>November 18, 2023</h2>
                    
                    </div> 
                    <div className='absolute top-80 left-2/4  mb-2'>
                      <img  className='mb-2 ml-5 ' src={line4} alt='line' />
                      <div className='  '>
                      <img   src={No2} alt='number' />
                      </div>
                      
                    </div>
                    <div className=' '>
                         <h2>Teams Registration begins</h2>
                         <p>Interested teams can now show their interest in the</p>
                         <p> getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                  </div>
                  <div className='mt-20 flex justify-between items-center'>
                    <div className=''>
                        <h2>Teams Registration ends</h2>
                        <p>Interested Participants are no longer Allowed to
                            register</p>
                       
                    </div> 
                    <div className='absolute top-2/3  left-1/3 ml-52'>
                      <img  className='ml-6 mt-2 mb-2' src={line5} alt='line' />
                         <img className=''  src={No3} alt='number' />
                    </div>
                    <div className='mr-36'>
                         <h2 className=''>November 18, 2023</h2>
                    </div>
                  </div>
                  <div className='mt-36 flex justify-between items-center'>
                    <div className='ml-36'>
                        <h2>November 18, 2023</h2>
                    
                    </div> 
                    <div className='absolute top-3/4 left-2/4 mt-24  mb-2'>
                      <img  className='mb-2 ml-5 mt-2 ' src={line6} alt='line' />
                      <div className='  '>
                      <img   src={No4} alt='number' />
                      </div>
                      
                    </div>
                    <div className=' '>
                         <h2>Announcement of the accepted teams
                              and ideas</h2>
                         <p> All teams whom idea has been accepted into getlinked tech</p>
                           <p> hackathon 1.0 2023 are formally announced</p>
                    </div>
                  </div>
                  </div>       
        </div>
    </div>
  )
}

export default Timeline