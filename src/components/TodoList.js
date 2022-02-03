import { useState } from "react"
import Todo from "./Todo"
import TodoForm from './TodoForm'

const TodoList = ({todo, onComplete, onDelete, onupdateTodo}) => {
 const editeTodo=(newValue)=>{

     onupdateTodo(edit.id, newValue);
     setEdit({id:null, text:""});

 }
  const [edit, setEdit]=useState({id:null, text:"", isCompleted:false});

    const renderTodos=()=>{

        if(todo.length=== 0 ) return <p>add some todos</p>
    
        return  todo.map(todo=>{
                return <Todo key={todo.id} todo={todo} onComplete={()=> onComplete(todo.id)} onDelete={()=> onDelete(todo.id)} 
                onEdit={()=>setEdit(todo)}
                />
            })}

       
    
    
    return <div>{edit.id? <TodoForm submitTodo={editeTodo} edit={edit}/>: renderTodos()}</div>
}
 
export default TodoList;