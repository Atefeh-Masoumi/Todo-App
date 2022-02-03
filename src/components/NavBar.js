const Navbar = ({unCompletedTodo}) => {


   
    return ( 
        <div>
            {unCompletedTodo? (
                <>
                    <header>

                    <span> {unCompletedTodo} </span>
                    <h2>are not completed</h2>
                    </header>
                </>
            ):(
                <h2>Set your Today Todos !</h2>
            )}
            
        </div>
     );
}
 
export default Navbar;