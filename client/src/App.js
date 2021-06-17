import "./App.scss";

import { ToDoList, NewTask } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="app-col">
        <NewTask />
      </div>
      <div className="app-col">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
