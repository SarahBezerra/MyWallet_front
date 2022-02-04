import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './style/reset.css';
import './style/style.css';

import LoginPage from './components/LoginPage/index';
import RegistrationPage from './components/RegistrationPage/index';
import HomePage from './components/HomePage/index';
import Register from './components/Register';

export default function App(){
    const [token, setToken] = useState("");

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setToken={setToken} />} />
                <Route path="/cadastro" element={<RegistrationPage />} />
                <Route path="/home" element={<HomePage token={token} />} />
                <Route path="/registrar/:tipo_de_registro" element={<Register token={token} />} />
            </Routes>
        </BrowserRouter>
    )
}