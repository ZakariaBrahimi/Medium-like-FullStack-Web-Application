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

function App() {
  return (
    <>
    <NavBar />
    
    
    <Routes>
      <Route path='/password-reset'       element={<PasswordReset/>} />
      <Route path='/password-change'      element={<PasswordChange/>} />
      <Route path='/edit-article'         element={<EditArticle/>} />
      <Route path='/'                     element={<Home/>} />
      <Route path='/search'               element={<Search/>} />
      <Route path='/login'                element={<Login />}/>       
      <Route path='/signup'               element={<Signup />}/>
      <Route path='/notifications'        element={<Notifications/>}/>
      <Route path='/favorite-lists'       element={<FavoriteLists/>} />
      <Route path='/my-articles'          element={<UserArticles/>} />
      <Route path='/my-profile'           element={<UserProfile/>} />
      <Route path='/create-new-article'   element={<CreateNewArticle />} />
      <Route path='*'   element={<PageNotFound />} />

      <Route path='/article'              element={<Article/>}/> {/*TODO: add article id to the url */}
    </Routes>
    </>
  );
}

export default App;
