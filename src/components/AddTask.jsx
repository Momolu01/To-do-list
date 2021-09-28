import React from "react";

const AddTask = ({ handleAddTitle, setTaskTitle }) => {
    return(
        <div>
            <input type="text" placeholder="New Task" onChange={ e => (setTaskTitle(e.target.value))} ></input>
            <button className="bg-blue_third px-3" onClick={handleAddTitle}>Add</button>    
        </div>
    )
}

export default AddTask;