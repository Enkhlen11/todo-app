import footerTask from "../style/footerTask.module.css";

export default function FooterTask({ todos }) {
  return (
    <div className={footerTask.lineFlex}>
      <p>
        {todos.filter((todo) => todo.isCompleted).length} of
        {todos.length} tasks completed
      </p>
      <button className={footerTask.btn}>Clear Completed</button>
    </div>
  );
}
