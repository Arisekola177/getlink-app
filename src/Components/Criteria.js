import React from 'react'
import { Ellipse } from '../assets/index'
import { manAndWoman } from '../assets/index'
import starpu from '../assets/star pu.png'
import star1 from '../assets/star (1).png'
import star from '../assets/star.png'
const Criteria = () => {
  return (
    <div className='w-full relative '>
        <div className='w-10/12 mx-auto text-white font-titleFont grid grid-cols-2 py-4'>
             <div className='w-full mt-36'> 
               <img className='' src={Ellipse} alt='ellipse' />
             </div>
             <div className='w-full mt-28'>
                <h1 className='text-2xl mb-4 font-extrabold'>Judging Criteria</h1>
                   <h1 className='text-2xl mb-4 font-extrabold text-primeColor'>Key attributes</h1>
                   <div className='text-sm'>
                   <p className='mb-4'><span className='text-bold text-primeColor'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                                        solution. Consider whether it addresses a real-world problem in a novel 
                                         way or introduces innovative features.</p>
                  <p className='mb-4'><span className='text-bold text-primeColor'>Functionality:</span> Assess how well the solution works. Does it perform its 
                                        intended functions effectively and without major issues? Judges would
                                        consider the completeness and robustness of the solution.</p>
                 <p className='mb-4'><span className='text-bold text-primeColor'>Impact and Relevance:</span> Determine the potential impact of the solution 
                                              in the real world. Does it address a significant problem, and is it relevant 
                                              to the target audience? Judges would assess the potential social, 
                                              economic, or environmental benefits.</p>
                 <p className='mb-4'><span className='text-bold text-primeColor'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                                              Judges would consider the complexity of the code, the use of advanced 
                                              technologies or algorithms, and the scalability of the solution.</p>
                 <p className='mb-4'><span className='text-bold text-primeColor'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                                              to the rules and guidelines of the hackathon, including deadlines, use of 
                                              specific technologies or APIs, and any other competition-specific requirements.</p>
                                              </div>
               <div className='w-32 bg-gradient-to-r from-fthColor to-primeColor rounded-sm shadow-md'>
                         <button className='text-xs py-2 px-8'>Read More</button>
                </div>
             </div>

        </div>
        <div className='absolute top-52 left-8'>
        <img className='w-5/6' src={manAndWoman} alt='man' />
        </div>
        <div className='absolute top-20 left-40'>
          <img src={starpu} alt='star' />
        </div>
        <div className='absolute top-2/4 mt-20 left-80 ml-10'>
          <img src={star1} alt='star' />
        </div>
        <div className='absolute top-3/4 mt-16 left-96 ml-40'>
          <img src={star} alt='star' />
        </div>
        <p className='border-b border-slate-300 mt-16'></p>
    </div>
  )
}

export default Criteria