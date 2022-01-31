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
    return (
        <div className="container">
            <TodoForm addtodoHandler={addtodoHandler}/>
            <TodoList todo={todo}/>          
            </div>
      );
}
 
export default TodoApp;