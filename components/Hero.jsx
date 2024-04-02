import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='max-w-[1600px] mx-auto grid sm:grid-cols-2 sm:h-[500px] gap-4'>

      <div className='bg-food-image-2 bg-cover bg-center w-full flex flex-col justify-center text-center
                     text-white p-4  h-[300px] sm:h-full'>

        <div className='bg-white rounded-xl w-[300px] md:w-[700px] mx-auto grid grid-cols-10 p-4'>
            <form className='border border-gray-300 shadow-xl col-span-7 sm:col-span-8 flex justify-between 
                    items-center max-w-[700px] mx-auto w-full  p-1 rounded-md text-black bg-gray-100/90'>
                <input className='ml-4 bg-transparent focus:outline-none' type='text' 
                        placeholder='Type your location ...' />
                <button className='text-3xl'>
                    <AiOutlineSearch/>
                </button>
            </form>
            <button class="col-span-2 mx-auto my-auto rounded-lg h-8 w-20 border border-orange-500
                         bg-orange-500 text-white shadow-2xl">
                        Find
            </button>
        </div>
 
      </div>


      <div className='rounded-xl bg-food-image bg-cover bg-center h-[300px] sm:h-full'>
      </div>
      
    </div>
  )
}

export default Hero