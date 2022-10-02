import React from 'react'

const CommentsSection = ({comments}) => {
  //console.log(comments)
  return (
    <div className='w-2/4 m-auto my-16'>
        <div className='flex justify-center my-16'>
    <div class="bg-white max-w-xl ">
      <h1 class="text-2xl border-b text-gray-700 font-semibold hover:underline cursor-pointer">Comments Section</h1>
      {
        comments.map((comment)=>{
          return (
            <>
            <div key={comment['id']} class="mt-4 border-b">
        <p class="mt-8 text-md text-gray-600">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happines.</p>
        <div class="flex justify-between items-center">
          <div class=" flex items-center space-x-4 py-4">
            <div class="">
              <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
            </div>
            <div class="text-sm font-semibold">John Lucas • <span class="font-normal"> 5 minutes ago</span></div>
          </div>
        </div>
      </div>
            </>
          )
        })
      }

      
    </div>

    </div>

    </div>
  )
}

export default CommentsSection