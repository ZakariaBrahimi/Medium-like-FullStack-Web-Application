import React, {useState} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { axiosRegistration } from '../axios'

const Signup = () => {
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [username, setUsername]   = useState('')
    const [email, setEmail]         = useState('')
    //const [firstname, setFirstname] = useState('')
    //const [lastname, setLastname] = useState('')
    let navigate = useNavigate()
    
    const signup = (e)=>{
        e.preventDefault()
        axiosRegistration({
            url: '',
            method: 'post',
            headers:{"Content-Type": "application/json"},
            data:{
                "username": username,
                "email": email,
                //"firstname": firstname,
                //"lastname": lastname,
                "password1": password1,
                "password2": password2
            }
        }).then((response)=>{
            const data = response.data.detail
            console.log(data)
            navigate('/') //TODO: -> add alert here
        }).catch((err)=>{
            const errors_data = err.response.data
            console.log(errors_data)
            

        })
    }
    if (window.localStorage.getItem('token')){
        return <Navigate to='/my-profile' replace />
    }
  return (
    < >
      
      <div className='flex flex-col items-center my-16'>
<div class="p-4 w-full max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" onSubmit={signup}>
        <h5 class="text-3xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required />
        </div>
        {/*<div>
            <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="first name" required />
        </div>
        <div>
            <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" name="lastName" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="last name" required />
        </div>*/}
        <div>
            <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Password</label>
            <input value={password1} onChange={(e)=>setPassword1(e.target.value)} type="password" name="password1" id="password1" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" requiredd />
        </div>
        <div>
            <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
            <input value={password2} onChange={(e)=>setPassword2(e.target.value)} type="password" name="password2" id="password2" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" requiredd />
        </div>
        
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create New Account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account? 
            <Link to="/login" class="text-blue-700 hover:underline dark:text-blue-500">
              Log in
            </Link>
        </div>
    </form>
</div>
</div>
      </>
  )
}

export default Signup;