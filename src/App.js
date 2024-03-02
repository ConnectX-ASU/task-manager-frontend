import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';

function App() {
  return (
    <div className="App bg-[var(--secondary)] min-h-screen text-white min-w-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
