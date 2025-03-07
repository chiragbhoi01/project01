import { Route } from 'react-router';
import {  About, Category, Footer ,Header , Home  } from './index';
import './index.css'
import { Routes } from 'react-router';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
