import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className={`${styles.myContainer} container `}>
      <div className={`row k-row ${styles.myRow}`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={` ${styles.myButton} btn btn-danger`}
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
