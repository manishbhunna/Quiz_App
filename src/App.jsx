import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz"
import "./App.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Username from "./components/Username";


function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<Username/>}></Route>
      <Route path="/Quiz" element={<Quiz/>}></Route>

    </Routes>
      </>
  )
}

export default App
