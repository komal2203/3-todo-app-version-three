import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added:${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="body_box">
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </div>
  );
}

export default App;
