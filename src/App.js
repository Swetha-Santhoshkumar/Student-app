import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/view' element={<View/>}/>
        </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
