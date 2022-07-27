import Header from "./components/Header";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
