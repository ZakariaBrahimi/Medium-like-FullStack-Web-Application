import { Link, Navigate, useNavigate } from 'react-router-dom'
import AddComment from '../Components/AddComment'
import CommentsSection from '../Components/CommentsSection'
import {useEffect, useState} from 'react'
import { axiosAPI } from '../axios'
import { useParams } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate()
  const [article, setArticle] = useState([])
  const params = useParams();
  useEffect(()=>{
    axiosAPI({
      url:`article/${params.id}/${params.slug}`,
      method: 'get',
      headers:{
        "Authorization": `Token ${window.localStorage.getItem('token')}`
    }
    }).then((response)=>{
      let article_details = response.data
      setArticle(article_details)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  const deleteArticle = ()=>{
    axiosAPI({
      url:`delete-article/${params.id}`,
      method: 'post',
      headers:{
        "Authorization": `Token ${window.localStorage.getItem('token')}`
    },

    }).then((response)=>{
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
  }
  const addToFavoriteList = ()=>{
    axiosAPI({
      url:`add-to-favorite/${params.id}`,
      method: 'post',
      headers:{
        "Authorization": `Token ${window.localStorage.getItem('token')}`
    },

    }).then((response)=>{
      console.log('success')
    }).catch((error)=>{
      console.log(error)
    })
  }
  const [dropDownStatus, setDropDownStatus] = useState('invisible')
  const dropDownHandler = ()=>{
    if(dropDownStatus === 'invisible'){
      setDropDownStatus('visible')
    }else{
      setDropDownStatus('invisible')
    }
  }
  if (!window.localStorage.getItem('token')){
    return <Navigate to='/' replace />
}
  return (
    <>
    <div className='flex flex-col items-center my-16'>
    <main class="">        
      <header className='flex justify-between items-center border-b pb-3' >
      <Link to='/my-profile' className="flex gap-2 items-center  hover:text-gray-700 focus:text-gray-700"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Zakaria</span>
      </Link>
      <p className="text-gray-600">Last updated 3 mins ago</p>
      <div className='flex gap-4'>


      <div onClick={dropDownHandler} type='button'  className='cursor-pointer'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-black hover:text-gray-700 focus:text-gray-700 h-6 w-6' ><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
      <div className={`p-4 ${dropDownStatus} absolute w-40 z-10 text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm  transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}>
        <ul className='text-center'>
        </ul>
    </div>
      </div>
      <div class="flex cursor-pointer items-center transition hover:text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>125</span>
          </div>
          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
          <svg fill="none" viewBox="0 0 24 24"  class="h-6 w-6 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            <span>4</span>
          </div>
          <a href='' class="flex mr-2 items-center text-gray-700 text-sm mr-4 ">
               <svg fill="none" viewBox="0 0 24 24" class="h-6 w-6 mr-1 " stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
               <span className=''>share</span>
            </a>
      </div>
      <div onClick={dropDownHandler} type='button'  className='cursor-pointer'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000"></path></svg>
      <div className={`p-4 ${dropDownStatus} absolute w-40 z-10 text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm  transition-opacity duration-300 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}>
        <ul className='text-center'>
          <li onClick={deleteArticle} className='text-red-400 flex items-center gap-2 border-b px-4 py-2 hover:text-black '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>



            Delete 
            </li>
          <Link to={`/${article['id']}/${article['slug']}/edit`} state={{data:article,}}>
          <li className='flex items-center gap-2 border-b px-4 py-2 hover:text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

            Edit </li>
          
          </Link>
          <li className='flex items-center gap-1 px-4 py-2 hover:text-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>

            
            Copy link </li>
        </ul>
    </div>
      </div>
      

      

      
      </header>






      <h1 className='text-3xl text-center font-medium	my-3 mt-6'>Amazon Interview Experience (II) -Selected</h1>
      <img src="https://miro.medium.com/max/720/1*9H-uXnqa6fbrrgLS0rwlLQ.png" alt="" srcset="" />
      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.</p>

        <p class="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
          thoroughly
          partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
          attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
          expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
          uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
          newspaper in advantage frankness to concluded unwilling.</p>

        <p class="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
          discovered
          uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
          spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
          active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
          prospect no as raptures quitting.</p>

        <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
          expression
          unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
          Steepest speaking up attended it as. Made neat an on be gave show snug tore.
        </div>

        <p class="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
          everything.
          Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
          is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
          among. Delightful remarkably new assistance saw literature mrs favourable.</p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

        <p class="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
          oh he common
          future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
          simplicity at do projecting increasing terminated. As edward settle limits at in.</p>

        <p class="pb-6">Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh.
          Hundred no
          prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced
          ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who
          connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding
          ask expense are compact. New all paid few hard pure she.</p>

        <p class="pb-6">Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at
          tastes really
          so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited
          elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By
          in cold no less been sent hard hill.</p>

        <p class="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
          make two real
          miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
          to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
          without me.</p>

      </div>
    </main>
    </div>


    <CommentsSection/>
    
    <AddComment/>
    
    </>
  )
}

export default Article