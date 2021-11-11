import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { fetchTasks, postTask } from "./service/tasks";



function App() {

  const [taskList, setTaskList] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    async function getTasks() {
      const tasks = await fetchTasks()
      setTaskList(tasks);
    }
    getTasks();
  }, [])


  // Functions
  const handleAddTitle = async () => {
    if (taskTitle.length !== 0) {
      const newTask = {
        title: taskTitle,
        status: false
      };
      await postTask(newTask);
      setTaskList([...taskList, newTask]);
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
            taskList.map((task, index) => (
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
