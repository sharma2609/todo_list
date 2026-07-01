import { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("nothing-todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Failed to parse saved todos:", error);
        localStorage.removeItem("nothing-todos");
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("nothing-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(
    (text, category = "personal", isUrgent = false) => {
      const newTodo = {
        id: crypto.randomUUID(), // Better unique ID generation
        text: text.trim(),
        category,
        isUrgent,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    },
    []
  );

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    if (window.confirm("Clear all completed tasks?")) {
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    }
  }, []);

  const clearAll = useCallback(() => {
    if (window.confirm("Clear all tasks?")) {
      setTodos([]);
    }
  }, []);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "personal":
        return todos.filter((todo) => todo.category === "personal");
      case "work":
        return todos.filter((todo) => todo.category === "work");
      case "others":
        return todos.filter((todo) => todo.category === "others");
      case "urgent":
        return todos.filter((todo) => todo.isUrgent);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = useMemo(
    () => ({
      total: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      urgent: todos.filter((todo) => todo.isUrgent && !todo.completed).length,
      personal: todos.filter(
        (todo) => todo.category === "personal" && !todo.completed
      ).length,
      work: todos.filter((todo) => todo.category === "work" && !todo.completed)
        .length,
      others: todos.filter(
        (todo) => todo.category === "others" && !todo.completed
      ).length,
    }),
    [todos]
  );

  return (
    <div className="app">
      <div className="app-container">
        {/* Left Panel - Input */}
        <div className="left-panel">
          <header className="header">
            <div className="logo">
              <div className="dot" aria-hidden="true"></div>
              <h1>Tasks</h1>
            </div>
            <p className="subtitle">Nothing but productivity</p>
          </header>

          <TodoForm onAddTodo={addTodo} />

          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item primary">
                <span className="stat-number">{stats.total}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-item urgent">
                <span className="stat-number">{stats.urgent}</span>
                <span className="stat-label">Urgent</span>
              </div>
            </div>

            <div className="category-stats">
              <div className="category-stat">
                <span className="category-name">Personal</span>
                <span className="category-count">{stats.personal}</span>
              </div>
              <div className="category-stat">
                <span className="category-name">Work</span>
                <span className="category-count">{stats.work}</span>
              </div>
              <div className="category-stat">
                <span className="category-name">Others</span>
                <span className="category-count">{stats.others}</span>
              </div>
            </div>
          </div>

          <div className="actions">
            {stats.completed > 0 && (
              <button className="action-btn" onClick={clearCompleted}>
                Clear Completed
              </button>
            )}
            {stats.total > 0 && (
              <button className="action-btn danger" onClick={clearAll}>
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Right Panel - Tasks Display */}
        <div className="right-panel">
          <div className="filter-section">
            <div className="filter-row">
              <div className="filter-group">
                <button
                  className={`filter-tab ${filter === "all" ? "active" : ""}`}
                  onClick={() => setFilter("all")}
                >
                  All
                </button>
                <button
                  className={`filter-tab ${
                    filter === "urgent" ? "active" : ""
                  }`}
                  onClick={() => setFilter("urgent")}
                >
                  Urgent
                </button>
                <button
                  className={`filter-tab ${
                    filter === "completed" ? "active" : ""
                  }`}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </button>
              </div>
            </div>

            <div className="filter-row">
              <div className="filter-group categories">
                <button
                  className={`filter-tab category ${
                    filter === "personal" ? "active" : ""
                  }`}
                  onClick={() => setFilter("personal")}
                >
                  Personal
                </button>
                <button
                  className={`filter-tab category ${
                    filter === "work" ? "active" : ""
                  }`}
                  onClick={() => setFilter("work")}
                >
                  Work
                </button>
                <button
                  className={`filter-tab category ${
                    filter === "others" ? "active" : ""
                  }`}
                  onClick={() => setFilter("others")}
                >
                  Others
                </button>
              </div>
            </div>
          </div>

          <TodoList
            todos={filteredTodos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
            filter={filter}
          />

          {filteredTodos.length === 0 && todos.length > 0 && (
            <div className="empty-state">
              <div className="empty-animation">
                <div className="empty-dot" aria-hidden="true"></div>
                <div className="empty-rings" aria-hidden="true">
                  <div className="ring"></div>
                  <div className="ring"></div>
                </div>
              </div>
              <p>No tasks in this view</p>
              <span>Try switching categories or add new tasks</span>
            </div>
          )}

          {todos.length === 0 && (
            <div className="empty-state">
              <div className="empty-animation">
                <div className="empty-dot" aria-hidden="true"></div>
                <div className="empty-rings" aria-hidden="true">
                  <div className="ring"></div>
                  <div className="ring"></div>
                </div>
              </div>
              <p>No tasks yet</p>
              <span>Add your first task to get started</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
