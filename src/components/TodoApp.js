import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todo, setTodo]= useState([]);

    const addtodoHandler=(input)=>{
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
    const editTodo=(id)=>{
        
    }
    return (
        <div className="container">
            <TodoForm addtodoHandler={addtodoHandler}/>
            <TodoList todo={todo} onComplete={completeTodo} onDelete={removeHandler} onEdit={editTodo}/>          
            </div>
      );
}
 
export default TodoApp;