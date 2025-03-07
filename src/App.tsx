import { useReducer } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import TaskList from "./pages/TaskList/TaskList";
import AddTask from "./pages/AddTask/AddTask";
import taskReducer from "./reducers/taskReducer";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Task {
  id: number;
  name: string;
}

const initialState = { tasks: [] };

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (taskName: string) => {
    dispatch({ type: 'ADD_TASK', payload: taskName });
  };

  const removeTask = (taskId: number) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  const toggleTask = (taskId: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  }

  return (
    <>
      <Header />
      <MainContent>
        <div className="app-container">
          {/* Pode adicionar estilos ou classes conforme necessário */}
          {/* <h1>Task List</h1> */}
          <AddTask onAddTask={addTask} />
          <TaskList tasks={state.tasks} onRemoveTask={removeTask} onToggleTask={toggleTask} />
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
