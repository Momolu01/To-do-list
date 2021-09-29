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
//     const editTask = () => {
// 
//         return (
//             <div className=" absolute">
//                 <form>
//                     <select>
//                         <option value="1"></option>
//                     </select>
// 
//                 </form>
//             </div>
//         )
//     }

    return(
        <div className="flex justify-start py-1 text-center">
            <input type="checkbox" 
                className="w-10 mt-1.5 mr-1 bg-blue_third"
                onChange={handlestatusTask} 
                checked={status? true : false}
            />
            <h2 
            className={`${status? ("line-through") : ("")} w-full `}
            >{title}</h2>
            <div className="w-13 bg-gray px-1 relative">
                <button 
                onClick={deteleTask}
                >{!status ? 
                    "..." : 
                    "Delete"}</button>
            </div>
        </div>
    )
})

export default TodoItem;