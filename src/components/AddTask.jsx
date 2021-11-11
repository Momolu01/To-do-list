import React, { useRef } from "react";

const AddTask = ({ handleAddTitle, clearTaskList, setTaskTitle, taskTitle }) => {

    const addTaskRef = useRef();
    return (
        <div ref={addTaskRef}
            className="pb-3 flex justicy-center flex-col">
            <input
                type="text"
                placeholder="New Task"
                onChange={e => (setTaskTitle(e.target.value))}
                value={taskTitle}
                className="w-auto"
            />
            <div className="w-full">
                <button
                    className="bg-blue_third px-3 w-1/2"
                    onClick={clearTaskList}>Clean</button>

                <button
                    className="bg-blue_third px-3 w-1/2"
                    onClick={handleAddTitle}>Add</button>

            </div>
        </div>
    )
}

export default AddTask;