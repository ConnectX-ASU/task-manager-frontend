import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';

function App() {
  return (
    <div className="App bg-[var(--secondary)] min-h-screen text-white min-w-screen">
      {/*<h1 className='text-2xl text-[var(--red)]'>
        Template react app for ConnectX's Task Manager
      </h1>*/}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
