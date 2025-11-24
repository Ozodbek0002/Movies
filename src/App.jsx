import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorities from "./pages/Favorities";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./components/context/MovieContext";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorities" element={<Favorities />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/signup" element={<h1>signup</h1>} />
        </Routes>
      </main>
      <Footer/>
    </MovieProvider>
  );
}

export default App;
