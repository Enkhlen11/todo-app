import footerTask from "../style/footerTask.module.css";

export default function FooterTask({ todos, setTodos }) {
  //   function clearCompleted(){const userConfirmed=confirm("Are you sure you want to delete this tasks ?")
  // if(userConfirmed){setTodos(todos.filter((todo) => !todo.isCompleted))
  // }    
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const clearCompletedHandler = () => {
    const confirmClear = window.confirm(
      "Are you sure wwant to clear all this shit?"
    );
    if (!confirmClear) return;
    setTodos(todos.filter((todo) => !todo.isCompleted));

  };
  return (
    <div className={footerTask.lineFlex}>
      <p>
        {todos.filter((todo) => todo.isCompleted).length} of {todos.length} tasks completed
      </p>
      <button
        className={footerTask.btn}
        onClick={clearCompletedHandler}
        disabled={completedCount === 0}
      >
        Clear Completed
      </button>
    </div>
  );
}
