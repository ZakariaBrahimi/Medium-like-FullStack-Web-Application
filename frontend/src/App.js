import NavBar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Search from './Pages/Search'
import Home from './Pages/Home'
import Notifications from './Pages/Notifications'
import FavoriteLists from './Pages/FavoriteLists'
import UserArticles from './Pages/UserArticles'
import UserProfile from './Pages/UserProfile'
import CreateNewArticle from './Pages/CreateNewArticle'
import Article from './Pages/Article'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import PasswordReset from './Pages/PasswordReset'
import PasswordChange from './Pages/PasswordChange'
import PageNotFound from './Pages/PageNotFound'
import EditArticle from './Pages/EditArticle'
import React, {useEffect, useState} from 'react'
import {axiosAPI} from './axios'

function App() {
  const [userInfo, setUserInfo] = useState([])
  useEffect(()=>{
    axiosAPI({
      url:"user-profile",
      method: 'get',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${window.localStorage.getItem('token')}`
    }
    }).then((response)=>{
      const user_info = response.data
      setUserInfo(user_info)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  return (
    <>
    <NavBar />
    
    
    <Routes>
      <Route path='/password-reset'       element={<PasswordReset/>} />
      <Route path='/password-change'      element={<PasswordChange/>} />
      <Route path='/:id/:slug/edit'       element={<EditArticle/>} />
      <Route path='/'                     element={<Home/>} />
      <Route path='/search'               element={<Search/>} />
      <Route path='/login'                element={<Login />}/>       
      <Route path='/signup'               element={<Signup />}/>
      <Route path='/notifications'        element={<Notifications/>}/>
      <Route path='/favorite-lists'       element={<FavoriteLists/>} />
      <Route path='/my-articles'          element={<UserArticles/>} />
      <Route path={`/my-profile`}          element={<UserProfile userInfo={userInfo}/>} />
      <Route path='/create-new-article'   element={<CreateNewArticle />} />
      <Route path='/article/:id/:slug'    element={<Article/>}/> 
      <Route path='*'   element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
