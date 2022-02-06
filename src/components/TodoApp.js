import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todo, setTodo]= useState([]);
    const [filteredTodo, setFilterTodo] = useState([]);
    const[status,setStatus]= useState("All");

    useEffect(()=>{
    filterTodos(status.value);
    },[todo,status]);

    const addtodo=(input)=>{
        const newTodo ={
            id:Math.floor(Math.random()*1000),
            text:input,
            isCompleted:false,
        };
        setTodo([...todo, newTodo]);

    }

    const completeTodo=(id)=>{
        
        const index = todo.findIndex(todo=>todo.id===id);
        
        const selectedTodo={...todo[index]};
        selectedTodo.isCompleted=!selectedTodo.isCompleted;
        const updatedTodos=[...todo]
        updatedTodos[index]=selectedTodo;
        setTodo(updatedTodos);
    }

    const removeHandler=(id)=>{
        const filteredTodos = todo.filter((t)=>t.id !== id);
        setTodo(filteredTodos);


    }
    const updateTodo=(id,newValue)=>{
        const index = todo.findIndex(todo=>todo.id===id);
        
        const selectedTodo={...todo[index]};
        selectedTodo.text= newValue;
        const updatedTodos=[...todo]
        updatedTodos[index]=selectedTodo;
        setTodo(updatedTodos);
    }
    const filterTodos =(status)=>{
        switch (status){
            // case'All': setFilterTodo(todo);
            // break;
            case'completed': setFilterTodo(todo.filter((t)=> t.isCompleted));
            break;
            case'unCompleted':setFilterTodo(todo.filter((t)=>!t.isCompleted));
            break;
            default:
                setFilterTodo(todo);
        }
    } 
    const changeHander=(e)=>{
        setStatus(e);
        console.log(e);
        filterTodos(e.value);
    
    }
    return (
        <div className="container">
            <Navbar unCompletedTodo={todo.filter((t)=> !t.isCompleted === true).length} filterTodos={filterTodos}
            onChange={changeHander}
            status={status}/>
            <TodoForm submitTodo={addtodo}/>
            
            <TodoList todo={filteredTodo} onComplete={completeTodo} onDelete={removeHandler} onupdateTodo={updateTodo} />          
        </div>
      );
}
 
export default TodoApp;