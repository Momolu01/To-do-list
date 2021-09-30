import React from "react";

const TodoItem = ( ({ title, status, setTaskList, index, taskList}) => {

    
    // Functions
    const handlestatusTask = () => {
        const currentTask = [...taskList];
        currentTask[index].status = !currentTask[index].status;
        setTaskList(currentTask);
    }
    const deteleTask = () => {
        const currentTask = [...taskList];
        if ( currentTask[index].status ) {
            currentTask.splice(index, 1);
            setTaskList(currentTask);            
        }
    }

    return(
        <div className="flex justify-start py-1 text-center">
            <input type="checkbox" 
                className="w-10 mt-1.5 mr-1 bg-blue_third"
                onChange={handlestatusTask} 
                checked={status? true : false}
            />
            <h2 
            className={`${status? ("line-through") : ("")} w-60 text-left `}
            >{title}</h2>
            <div className="w-16 bg-gray px-1  inline">
                {status?(
                    <button 
                    onClick={deteleTask}
                    >{"Delete"}</button>

                ):(
                    <div >...
                      {/* <form>
                            <select>
                                <option value="1">1</option>
                            </select>
                       </form> */}
                    </div>  
                )}
            </div>
        </div>
    )
})

export default TodoItem;