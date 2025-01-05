import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Allproducts from './components/Allproducts';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allproducts" element={<Allproducts/>} />
      </Routes>
    </Router>
  );
}