import Header from './components/header';
import Footer from './components/footer';
import Home from './view/landing';
import Register from './view/register';
import Login from './view/login'
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Navigate to ='/'/>} />
        </Routes>
        <Footer/> 
      </BrowserRouter>


    </>
  );
}

export default App;
