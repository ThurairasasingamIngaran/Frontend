
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './Employee/AddEmployee';
import EditEmployee from './Employee/EditEmployee';
import ViewEmployee from './Employee/ViewEmployee';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addemployee" element={<AddEmployee/>} />
        <Route exact path="/editemployee/:id" element={<EditEmployee/>} />
        <Route exact path="/viewemployee/:id" element={<ViewEmployee/>} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
