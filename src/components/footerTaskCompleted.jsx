import footerTask from "../style/footerTask.module.css";

export default function FooterTask() {
  return (
    <div className={footerTask.lineFlex}>
      <p>tasks completed</p>
      <button className={footerTask.btn}>Clear Completed</button>
    </div>
  );
}
