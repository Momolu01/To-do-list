import React from "react";

// Style
import "./styles/todoList.css";

const TodoList = ({ children }) => {
  return <div className="overflow-y-scroll min-h-30 max-h-60 flex flex-col justicy-flex-start w-full">{children}</div>;
};

export default TodoList;