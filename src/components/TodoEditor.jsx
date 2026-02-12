import React,{useState, useRef} from 'react'
import './style/TodoEditor.css'

const TodoEditor = ({onCreate}) => {
    
    const [content, setContent]=useState("")
    const inputRef=useRef(3)

    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }

    const onSubmit=()=>{
        if(content=='') {
            inputRef.current.focus()
            return
        }

        onCreate(content)
        setContent("")
    }

    const onKeyDown =(e)=>{
        if(e.keyCode==13){
            onSubmit()
        }
    }


  return (
    <div className='Editor'>
      <input type="text"
       placeholder='새로운 Todo...'
       ref={inputRef}
       value={content}
       onChange={onChangeContent}
       onKeyDown={onKeyDown}/>
      <button
      onClick={onSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor
