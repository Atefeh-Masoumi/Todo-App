
const Todo = ({todo}) => {
    return ( 
        <div key={todo.id}>
                    <div> {todo.text}</div>
                    <div>
                        <div>
                            <button>Edit</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
     );
}
 
export default Todo;