import React from "react";

const TodoList = ({ children }) => {
  return <div className="overflow-y-scroll min-h-30 max-h-60 flex flex-col justicy-flex-start">{children}</div>;
};

export default TodoList;