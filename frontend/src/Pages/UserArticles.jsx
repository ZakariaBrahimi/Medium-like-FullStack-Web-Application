import React from 'react'
import { Link } from 'react-router-dom'

const UserArticles = () => {
  return (

    <>
   
    <div className='w-6/12 my-16 m-auto  shadow-sm'>
    <div className='mb-6'>
        <p className='border-b text-2xl font-bold text-gray-800 mb-4'>Drafts List</p>
        <div class="py-1 flex flex-col justify-start border-b ">
      <Link to='article'>
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      </Link>
      <div className='flex justify-between items-center'>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      <div className='flex gap-4 items-center'>
      
      </div>
      </div>
    </div>

    <div class="py-1 flex flex-col justify-start border-b ">
      <Link to='article'>
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      </Link>
      <div className='flex justify-between items-center'>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      <div className='flex gap-4 items-center'>
      
      </div>
      </div>
    </div>

    <div class="py-1 flex flex-col justify-start  ">
      <Link to='article'>
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      </Link>
      <div className='flex justify-between items-center'>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      <div className='flex gap-4 items-center'>
      
      </div>
      </div>
    </div>


    

    
    </div>

    
    <div className='mb-6'>
        <p className='border-b text-2xl font-bold text-gray-800 mb-4 mt-12'>Published Articles</p>
        <div class="py-1 flex flex-col justify-start border-b ">
      <Link to='article'>
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      </Link>
      <div className='flex justify-between items-center'>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      <div className='flex gap-4 items-center'>
      
      </div>
      </div>
    </div>


    

    
    </div>
    </div>
    </>
  )
}

export default UserArticles