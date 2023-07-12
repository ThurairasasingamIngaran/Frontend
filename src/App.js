
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './Employee/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addemployee" element={<AddEmployee/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
