import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import {Toaster} from "react-hot-toast";
import CreateTaskModal from "./components/Pages/Tasks/CreateTaskModal";

function App() {
  return (
    <>
    <div className="App bg-[var(--secondary)] min-h-screen text-white min-w-screen">
      <RouterProvider router={router} />
      <CreateTaskModal/>
    </div>
    <Toaster position="top-center"/>
    </>
  );
}

export default App;
