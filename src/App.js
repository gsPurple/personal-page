import Header from "./components/Header";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/personal-page/' element={<Home />} />
        <Route path='/personal-page/cv' element={<CV />} />
        <Route path='/personal-page/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
