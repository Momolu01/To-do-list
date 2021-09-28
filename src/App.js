import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";

const list = [
  {title:"title#1",
  status: false
},
  {title:"title#2",
  status: true
},
  {title:"title#3",
  status: false
}
];

function App() {

  const [taskList, setTaskList] = useState(list);
  const [taskTitle, setTaskTitle] = useState("");
  
  // Functions
  const handleAddTitle = () => {
    setTaskList([...taskList, { title: taskTitle, status: false }]);
    setTaskTitle("");
  };

  
  


  return (
    <div className="h-screen bg-blue_main flex justify-center items-center">
      <div className=" bg-blue_secun p-4">
        <AddTask setTaskTitle={setTaskTitle} handleAddTitle={handleAddTitle}/>

        {
          taskList.map( (task, index) => (
            <TodoItem 
              key={index}
              title={task.title} 
              status={task.status} 
              setTaskList={setTaskList} 
              index={index} 
              taskList={taskList} />
          ))
        }
      </div>
    </div>
    );
}

export default App;
