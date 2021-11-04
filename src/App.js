import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

//PAGES and COMPONENTS
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route path='/create' element={<Create/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/projects/:id' element={<Project/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

