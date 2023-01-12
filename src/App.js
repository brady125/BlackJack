import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Game from './pages/Game'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"

function App(){


    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Game" element={<Game/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default App;