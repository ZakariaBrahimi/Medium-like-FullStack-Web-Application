import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosAuth } from '../axios'

const PasswordChange = () => {
    const logout = ()=>{
        axiosAuth({
              url: '/logout/',
              method: 'post',
          }).then(()=>{
              window.localStorage.removeItem('token')
              navigate('/login')
          })
      }
  const navigate = useNavigate() 
  const [newPassword1, setNewPassword1] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const passwordChange = (e)=>{
    e.preventDefault()
    axiosAuth({
            url: '/password/change/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${window.localStorage.getItem('token')}`
            },
            data:{
                'new_password1':newPassword1,
                'new_password2':newPassword2,
                'old_password':oldPassword
            }
        }
        ).then((response)=>{
            console.log(response)
            logout()
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
                        Change Password

                    </h3> 
                    <form onSubmit={passwordChange} class="mt-4">
                         <label  class="block">
                            <span class="block mb-2 text-sm text-gray-700 dark:text-gray-200 mt-3">Old Password</span> 
                            <input id="old-password" type="password" name="old-password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} required="required" autoComplete="email" autoFocus="autofocus" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/></label> 
                            <span class="block mb-2 text-sm text-gray-700 dark:text-gray-200 mt-3">New Password</span> 
                            <input id="new-password1" type="password" name="new-password1" value={newPassword1} onChange={(e)=>setNewPassword1(e.target.value)} required="required" autoComplete="email" autoFocus="autofocus" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/>
                            <span class="block mb-2 text-sm text-gray-700 dark:text-gray-200 mt-3">Confirm New Password</span> 
                            <input id="new-password2" type="password" name="new-password2" value={newPassword2} onChange={(e)=>setNewPassword2(e.target.value)} required="required" autoComplete="email" autoFocus="autofocus" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/>
                            <div class="mt-6">
                                <button type="submit" class="w-full px-4 py-2 tracking-wide  transition-colors text-white duration-300 transform rounded-md bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-teal-300">
                                    Change Password
                                </button></div></form></div></div></main>
    </>
  )
}

export default PasswordChange