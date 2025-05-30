"use client";
import { useState } from "react";
import styles from "./page.module.css";
import FooterTask from "../components/footerTaskCompleted";
import Tasks from "@/components/Tasks";


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    if (!newTodo) {
      alert("Please enter task");
      return;
    } else {
      setTodos([...todos, { title: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };
  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "completed") return todo.isCompleted;
    if (activeFilter === "active") return !todo.isCompleted;
    return true;
  });

  return (
    <div className={styles["body-width"]}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={styles.flex}>
          <input
            value={newTodo}
            className={styles.input}
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={styles.addButton} onClick={addTodoHandler}>
            Add
          </button>
        </div>

        <div className={`${styles.flex} ${styles.allBtn}`}>
          <button
            className={activeFilter === "all" ? styles.activeButton : ""}
            onClick={() => {
              setActiveFilter("all");
            }}
          >
            All
          </button>
          <button
            className={activeFilter === "active" ? styles.activeButton : ""}
            onClick={() => {
              setActiveFilter("active");
            }}
          >
            Active
          </button>
          <button
            className={activeFilter === "completed" ? styles.activeButton : ""}
            onClick={() => {
              setActiveFilter("completed");
            }}
          >
            Completed
          </button>
        </div>

        <div>
          <Tasks
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </div>
        {todos.length > 0 ? (
          <FooterTask todos={todos} setTodos={setTodos}/>
        ) : (
          <p className={styles.info}>No tasks yet.Add one above!</p>
        )}
        <div className={styles.flexFooter}>
          <p>Powered by </p>
          <a className={styles.blueword} href="">
            Pinecone academy
          </a>
        </div>
      </div>
    </div>
  );
}
