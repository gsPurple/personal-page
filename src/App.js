import Header from "./components/Header";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/react-cv' element={<Home />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
