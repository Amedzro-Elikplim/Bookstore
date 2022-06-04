import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './Components/Books';
import Category from './Components/Category';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
