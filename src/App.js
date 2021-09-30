import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

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
    if (taskTitle.length !== 0) {
      setTaskList([...taskList, { title: taskTitle, status: false }]);
      setTaskTitle("");
    }
  };
  const clearTaskList = () => {
    if (taskList.length !== 0) {
      setTaskList([]);
    }
  };

  return (
    <div className="h-screen  bg-blue_main flex justify-center items-center relative">
      <div className="w-72 sm:w-96 bg-blue_secun p-4 absolute top-56">
        <AddTask
        setTaskTitle={setTaskTitle} 
        handleAddTitle={handleAddTitle}
        clearTaskList={clearTaskList}
        taskTitle={taskTitle}
        />

        <TodoList>
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
          </TodoList>
      </div>
    </div>
    );
}

export default App;
