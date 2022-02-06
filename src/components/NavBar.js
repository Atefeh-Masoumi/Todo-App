import Select from 'react-select';


const options = [
    { value: 'All', label: 'All' },
    { value: 'completed', label: 'completed' },
    { value: 'unCompleted', label: 'unCompleted' },
  ];
  
const Navbar = ({unCompletedTodo, onChange,status}) => {


    
if(!unCompletedTodo) return <h2>Set your Today Todos !</h2>
   
    return ( 
        
            
            <header>

                <span> {unCompletedTodo} </span>
                <h2>are not completed</h2>
                <Select
                value={status}
                onChange={onChange}
                options={options}
                />
                {/* <select value={status} onChange={onChange}>
                    <option value="All"> All</option>
                    <option value="completed">completed</option>
                    <option value="unCompleted">unCompleted</option>
                </select> */}

            </header>
                
            
    
     );
}
 
export default Navbar;