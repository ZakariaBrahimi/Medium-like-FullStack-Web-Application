import {React, useRef, useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser';
 import  {Navigate, useLocation} from 'react-router-dom'

const EditArticle = () => {
    const editorRef = useRef(null);
    const location = useLocation()
    let article_data = location.state['data']
    //editorRef.current.setContent("article_data['HTMLBody']")
    const log = () => {
    if (editorRef.current) {
      console.log('editorRef.current')

    }
  };
  if (!window.localStorage.getItem('token')){
    return <Navigate to='/' replace />
}
  return (
    <>
    <p className='w-9/12 m-auto border-b text-2xl font-bold text-gray-800 mt-16'>Edit this Article</p>
    <div className='w-3/4 m-auto mb-16 mt-8 absolute left-40'>
        {/*TODO: image field */}
<Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
        onInit={() => editorRef.current = article_data['HTMLBody']}
        //onEditorChange={(nextContent)=>{setContent(nextContent)}}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'save', 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          
        }}
      />
      <button onClick={log} type="submit" class="my-6 mb-20 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>

    {/*<div dangerouslySetInnerHTML={{ __html: '<h1>hhh</h1><ul><li>hhh</li></ul>' }} />
    <div>{ ReactHtmlParser(content) }</div>
    */}
    





</div>
    </>
    
)}

export default EditArticle