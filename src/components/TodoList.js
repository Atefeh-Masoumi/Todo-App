import { useState } from "react"
import Todo from "./Todo"

const TodoList = ({todo, onComplete, onDelete, onEdit}) => {
 
  const [edit, setEdit]=useState({id:null, text:"", isCompleted:false});

    const renderTodos=()=>{

        if(todo.length=== 0 ) return <p>add some todos</p>
    
        return  todo.map(todo=>{
                return <Todo key={todo.id} todo={todo} onComplete={()=> onComplete(todo.id)} onDelete={()=> onDelete(todo.id)} 
                onEdit={()=>setEdit(todo)}
                />
            })}

       
    
    
    return <div>{renderTodos()}</div>
}
 
export default TodoList;