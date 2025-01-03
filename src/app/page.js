"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Tasks from "../components/task";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const addTodoHandler = () => {
    setTodos([...todos, { title: newTodo, isCompleted: false }]);
  };

  return (
    <div className={styles["body-width"]}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={styles.flex}>
          <input
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
          <p className={styles.info}>No tasks yet.Add one above!</p>
          <Tasks todos={todos} setTodos={setTodos} />
          {/* {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })} */}
        </div>
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
