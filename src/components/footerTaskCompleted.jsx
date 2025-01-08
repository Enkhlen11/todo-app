import footerTask from "../style/footerTask.module.css";

export default function FooterTask({ getTodos }) {
  return (
    <div className={footerTask.lineFlex}>
      <p>
        {getTodos.filter((todo) => todo.isCompleted).length} of
        {getTodos.length} tasks completed
      </p>
      <button className={footerTask.btn}>Clear Completed</button>
    </div>
  );
}
