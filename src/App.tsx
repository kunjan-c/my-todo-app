import "./App.css";
import ContentContainer from "./components/todoList/todoList.tsx";
import Header from "./components/header/header.tsx";
import CreateTodo from "./components/createTask/createTodo.tsx";
function App() {
  return (
    <>
      <div className="todo-app-main-container">
        <Header></Header>
        {/* <ContentContainer></ContentContainer> */}
        <CreateTodo></CreateTodo>
      </div>
    </>
  );  
}

export default App;
