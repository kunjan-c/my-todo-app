import "./App.css";
import ContentContainer from "./components/todoList/todoList.tsx";
import Header from "./components/header/header.tsx";
import CreateTodo from "./components/createTask/createTodo.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="todo-app-main-container">
        <Header></Header>
        <Routes>
          <Route
            element={<ContentContainer></ContentContainer>}
            path="/"
          ></Route>
          <Route
            element={<CreateTodo></CreateTodo>}
            path="/create-todo"
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
