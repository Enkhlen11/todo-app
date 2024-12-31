"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState(["g"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
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
        <div className={styles.flex}>
          <button className={styles.allBtn}>All</button>
          <button className={styles.allBtn}>Active</button>
          <button className={styles.allBtn}>Completed</button>
        </div>
        <div>
          <p className={styles.info}>No tasks yet.Add one above!</p>
          {/* {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })} */}
        </div>
        <div>
          <p></p>
          <a href="">Pinecone academy</a>
        </div>
      </div>
    </div>
  );
}
