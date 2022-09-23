import React from 'react'

const Notifications = () => {
  return (
    <>
    <div className='w-6/12 my-16 m-auto  shadow-sm'>
    <div className='mb-6'>
        <p className='border-b text-2xl font-bold text-gray-800 mb-4'>Notifications</p>
    <div class="py-1 flex flex-col justify-start  ">
      <a href='#article'>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      </a>
      <div className='flex justify-between items-center'>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      </div>
    </div>   
    </div>
    </div>
    </>
  )
}

export default Notifications