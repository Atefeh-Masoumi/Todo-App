import { useEffect, useRef, useState } from "react";

const TodoForm = ({buttonLabel="Add",edit,submitTodo}) => {
    const [input, setInput]=useState(edit? edit.text: "");
    const inputRef= useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const changeHandler=(e)=>{
        setInput(e.target.value)
    };

    const submitHandler=(e)=>{
        
        
        e.preventDefault();
        if(!input){
            alert("insert todo");
            return
        }
        submitTodo(input);
        
        //add entered todos  to todos
        setInput('');
    }


    return ( 
        <form onSubmit={submitHandler}>
         <div className="formControl">
          <input
           type='text' value={input} onChange={changeHandler} 
           placeholder= "add new todo"
            ref={inputRef}
            />
            <button className={`btn ${edit ?"updateTodo " :"addTodo"}`} type="submit">{buttonLabel}</button>
           
            </div>   
            
        </form>
     );
}
 
export default TodoForm;