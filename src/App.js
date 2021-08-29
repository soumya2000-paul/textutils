import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light'); //state of the page
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }
    const toggleMode = ()=>{
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#111';
            showAlert("Dark Mode Enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white'
            showAlert("Light Mode Enabled", "success");
        }
        
    }


    return ( 
        <>
        <Router>
            <Navbar title = "TextUtils" contact = "Contact" aboutText = "About Us" 
            mode={mode} toggleMode={toggleMode}/>
            <Alert alert= {alert}/>
            <div className = "container my-3">
            <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/TextUtils">
                <TextForm heading="Enter the Text to analyze" showAlert={showAlert} mode={mode}/>
              </Route>
            </Switch>
            </div>
        </Router>


        </>
    );
}

export default App;