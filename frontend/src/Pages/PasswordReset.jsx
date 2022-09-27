import {useState} from 'react'
import { axiosAuth } from '../axios'
import { useNavigate} from "react-router-dom"


const PasswordReset = () => {
  const navigate = useNavigate() 
  const [email, setEmail] = useState('')
  const passwordReset = (e)=>{
    e.preventDefault()
    axiosAuth({
            url: '/password/reset/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": email,
            }
        }
        ).then((response)=>{
            console.log(response)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
  }
  return (
    <>
    <main class="flex-1 lg:mt-20">
            <div class="flex items-center justify-center mx-6 my-16">
                <div class="w-full max-w-sm">
                    <h3 class="text-2xl text-center text-gray-700 dark:text-gray-200">
                        Reset Password

                    </h3> 
                    <form onSubmit={passwordReset} class="mt-4">
                         <label  class="block">
                            <span class="block mb-2 text-sm text-gray-700 dark:text-gray-200">E-Mail Address</span> 
                            <input id="email" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required="required" autoComplete="email" autoFocus="autofocus" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/></label> 
                            <div class="mt-6">
                                <button type="submit" class="w-full px-4 py-2 tracking-wide  transition-colors text-white duration-300 transform rounded-md bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-teal-300">
                                    Send Password Reset Link
                                </button></div></form></div></div></main>
    </>
  )
}

export default PasswordReset;