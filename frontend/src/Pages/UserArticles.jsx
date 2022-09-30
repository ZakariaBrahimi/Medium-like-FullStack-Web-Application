import { Link, Navigate } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { axiosAPI } from '../axios'

const UserArticles = () => {
  const [userArticles, setUserArticles] = useState([])
  useEffect(()=>{
    axiosAPI({
      url:"my-articles",
      method: 'get',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${window.localStorage.getItem('token')}`
    }

    }).then((response)=>{
      const user_articles = response.data
      setUserArticles(user_articles)
      console.log(user_articles)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  if (!window.localStorage.getItem('token')){
    return <Navigate to='/' replace />
}
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

        {userArticles.map((article)=>{
        return(
        <>
        <div key={article['id']} class="py-1 flex flex-col justify-start border-b ">
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
        
        </>
    )

        })


        }



    

    
    </div>
    </div>
    </>
  )
}

export default UserArticles