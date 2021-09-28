import React, { useRef } from "react";

const TodoItem = ( ({ title, status, setTaskList, index, taskList}) => {

    const singleTask = useRef();
    const handlestatusTask = () => {
        const currentTask = [...taskList];
        currentTask[index].status = !currentTask[index].status;
        setTaskList(currentTask);
        console.log("currentask.status: ", currentTask[index].status, "; ", singleTask);
    }

    return(
        <div className="flex py-1 text-center">
            <input type="checkbox" 
                ref={singleTask}
                className="w-1/12 mt-1.5 mr-1 bg-blue_third"
                onChange={handlestatusTask} 
                defaultChecked={status? true : false}
            />
            <h2 className={`${status? ("line-through") : ("")} w-full`}>{title}</h2>
            <h3 className="w-4/12 bg-gray ">{!status ? 
                "..." : 
                "Delete"}</h3>
        </div>
    )
})

export default TodoItem;