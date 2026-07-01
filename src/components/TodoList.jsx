import React, { useMemo } from "react";
import TodoItem from "./TodoItem.jsx";
import "./TodoList.css";

const TodoList = React.memo(({ todos, onToggleTodo, onDeleteTodo, filter }) => {
  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      // First sort by urgency (urgent tasks first)
      if (a.isUrgent && !b.isUrgent) return -1;
      if (!a.isUrgent && b.isUrgent) return 1;

      // Then by completion status (incomplete first)
      if (!a.completed && b.completed) return -1;
      if (a.completed && !b.completed) return 1;

      // Finally by creation date (newest first)
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [todos]);

  const filterTitle = useMemo(() => {
    switch (filter) {
      case "personal":
        return "Personal Tasks";
      case "work":
        return "Work Tasks";
      case "others":
        return "Other Tasks";
      case "urgent":
        return "Urgent Tasks";
      case "completed":
        return "Completed Tasks";
      default:
        return "All Tasks";
    }
  }, [filter]);

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="todo-list">
      <div className="list-header">
        <div className="list-title">
          <h2>{filterTitle}</h2>
          <div className="title-underline" aria-hidden="true"></div>
        </div>
        <div className="list-count">
          <span className="count-number">{todos.length}</span>
          <span className="count-label">
            {todos.length === 1 ? "task" : "tasks"}
          </span>
        </div>
      </div>

      <div className="todo-items">
        {sortedTodos.map((todo, index) => (
          <div
            key={todo.id}
            className="todo-item-wrapper"
            style={{
              animationDelay: `${index * 50}ms`,
              "--item-index": index,
            }}
          >
            <TodoItem
              todo={todo}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

TodoList.displayName = "TodoList";

export default TodoList;
