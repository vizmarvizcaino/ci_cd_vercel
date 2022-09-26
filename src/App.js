import './App.css';
import { TaskContextProvider } from './context/TaskContext';
import Home from './components/home/Home';

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
