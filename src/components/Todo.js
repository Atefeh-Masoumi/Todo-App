
const Todo = ({todo, onComplete, onDelete, onEdit}) => {
    return ( 
        <div className="todo" key={todo.id}>
                    <div onClick={onComplete} className={`Todotext ${todo.isCompleted? "completed" : ""}`}> {todo.text}</div>
                    <div>
                        <div>
                            <button className="btn" onClick={onEdit}>Edit</button>
                            <button className="btn remove" onClick={onDelete} >Delete</button>
                        </div>
                    </div>
                </div>
     );
}
 
export default Todo;