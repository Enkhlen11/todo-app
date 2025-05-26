import tasks from "../style/task.module.css";
// const functionName = ()=>{}
//function functionName(){}

const Tasks = ({ todos, setTodos, filteredTodos }) => {
  function deleteHandler(index) {
    const userConfirmed = confirm(
      "Are you sure you want to delete this task ?"
    );
    if (userConfirmed) {
      const newTodos=todos.filter((_,i)=>i !==index);
      setTodos([newTodos]);
    }
  }
  const handleCheckBox = (index) => {
    todos[index].isCompleted = !todos[index].isCompleted;
    setTodos([...todos]);
    console.log(todos);
  };
  //["hiisen ym", "hiih ym"]
  //[{title:"hiisen ym", isCompleted:fasle}]


  return (
    <div className={tasks.newTodo}>
      {filteredTodos.map((todo, index) => {
        return (
          <div key={index} className={tasks.todoFlex}>
            <div className={tasks.checkBoxFlex}>
              <input
                onChange={(event) => {
                  handleCheckBox(index);
                }}
                type="checkbox"
                checked={todo.isCompleted}
                id=""
              />
              <p className={todo.isCompleted ? tasks.completed : "aa"}>
                {todo.title}
              </p>
            </div>

            <button
              onClick={() => deleteHandler(index)}
              className={tasks.deleteButton}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Tasks;
