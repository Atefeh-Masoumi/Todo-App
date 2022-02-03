import { useState } from "react";
import Navbar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todo, setTodo]= useState([]);

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
    return (
        <div className="container">
            <Navbar unCompletedTodo={todo.filter((t)=> !t.isCompleted === true).length}/>
            <TodoForm submitTodo={addtodo}/>
            
            <TodoList todo={todo} onComplete={completeTodo} onDelete={removeHandler} onupdateTodo={updateTodo} />          
        </div>
      );
}
 
export default TodoApp;