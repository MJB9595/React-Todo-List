import React, {useState} from 'react'
import "./style/TodoList.css"
import TodoItem from './TodoItem'
const TodoList = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch]=useState('')
    const onChangeSearch=(e)=>{
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
    if (search === "") {
      return todos;                          // 검색어가 없을 때 전체 목록 반환
    }
    return todos.filter((todo) =>            // 검색어가 있을 때 필터링된 목록 반환
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

    const filterdTodos = getFilteredData()
    return (
        <div className='TodoList'>
            <h4>Todo List 🌱</h4>
            <input type="text" 
            value={search}
            onChange={onChangeSearch}
            placeholder='검색어를 입력하세요' />
            <div className="todo_wrapper">
                {filterdTodos.map((todo)=>(
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList

