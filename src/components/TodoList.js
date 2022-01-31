import Todo from "./Todo"

const TodoList = ({todo}) => {
    const renderTodos=()=>{
        if(todo.length=== 0 ) return <p>add some todos</p>
    return  todo.map(todo=>{
                return <Todo key={todo.id} todo={todo}/>
            })}

       
    
    
    return <div>{renderTodos()}</div>
}
 
export default TodoList;