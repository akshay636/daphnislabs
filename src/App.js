
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from './Components/Cards';
import AllCards from './Components/AllCards';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
