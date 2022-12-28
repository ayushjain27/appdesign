import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Display from './components/Display/Display';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Alert from './components/Alert/Alert';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar showAlert={showAlert}/>
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<Dashboard showAlert={showAlert} />} />
          <Route exact path='/display' element={<Display />} />
          <Route exact path='/login' element={<Login showAlert={showAlert} />} />
          <Route exact path='/register' element={<SignUp showAlert={showAlert} />} />
          <Route exact path='/searchbar' element={<SearchBar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
