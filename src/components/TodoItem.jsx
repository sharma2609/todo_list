import React, { useState, useCallback } from "react";
import "./TodoItem.css";

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = useCallback(() => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 200);
  }, [onDelete]);

  const handleToggle = useCallback(() => {
    onToggle();
  }, [onToggle]);

  const itemClasses = [
    "todo-item",
    todo.completed && "completed",
    todo.isUrgent && "urgent",
    isDeleting && "deleting",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={itemClasses}>
      <div className="todo-content">
        <button
          className="toggle-button"
          onClick={handleToggle}
          aria-label={
            todo.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          <div className={`checkbox ${todo.completed ? "checked" : ""}`}>
            <div className="checkbox-inner">
              {todo.completed && (
                <svg
                  className="checkmark"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </button>

        <div className="todo-details">
          <div className="todo-text-container">
            <span className="todo-text">{todo.text}</span>
            {todo.isUrgent && (
              <div className="urgent-indicator" aria-label="Urgent task">
                <div className="urgent-pulse" aria-hidden="true"></div>
              </div>
            )}
          </div>

          <div className="todo-meta">
            <span className={`category-badge ${todo.category}`}>
              <div className="category-dot" aria-hidden="true"></div>
              {todo.category}
            </span>
            <span className="date-badge">{formatDate(todo.createdAt)}</span>
          </div>
        </div>
      </div>

      <button
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        <div className="delete-icon" aria-hidden="true">
          <div className="delete-line"></div>
          <div className="delete-line"></div>
        </div>
      </button>
    </div>
  );
});

TodoItem.displayName = "TodoItem";

export default TodoItem;
