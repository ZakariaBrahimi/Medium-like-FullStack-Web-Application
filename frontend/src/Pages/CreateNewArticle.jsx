import {React, useRef, useState} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ReactHtmlParser from 'react-html-parser';
 import  {Navigate} from 'react-router-dom'


const CreateNewArticle = ({content, setContent}) => {

    
    const editorRef = useRef(null);
    const log = () => {
    if (editorRef.current) {
      //console.log(editorRef.current.getContent());
      console.log('editorRef.current')
      //console.log(editorRef.current.parser.schema)
      //setContent(editorRef.current.contentDocument.all[6].innerHTML)
      //console.log(editorRef.current.contentDocument.all[6].innerHTML)
      //document.getElementById('content').innerHTML = content
      //console.log(typeof(content))

    }
  };
  if (!window.localStorage.getItem('token')){
    return <Navigate to='/' replace />
}
  return (
    <>
    <p className='w-9/12 m-auto border-b text-2xl font-bold text-gray-800 mt-16'>Create a New Article</p>
    <div className='w-3/4 m-auto mb-16 mt-8 absolute left-40'>
<Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(nextContent)=>{setContent(nextContent)}}
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

    {/*<div dangerouslySetInnerHTML={{ __html: '<h1>hhh</h1><ul><li>hhh</li></ul>' }} />*/}
    <div>{ ReactHtmlParser(content) }</div>





</div>
    </>



  )
}

export default CreateNewArticle