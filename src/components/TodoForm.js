import { useState } from "react";

const TodoForm = (props) => {
    const [input, setInput]=useState("");

    const changeHandler=(e)=>{
        setInput(e.target.value)
    };

    const submitHandler=(e)=>{
        console.log(e.target.value);
        
        e.preventDefault();
        if(!input){
            alert("insert todo")
            return
        }
        props.addtodoHandler(input);
        
        //add entered todos  to todos
        setInput('');
    }


    return ( 
        <form onSubmit={submitHandler}>
            <input type='text' value={input} onChange={changeHandler}/>
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TodoForm;