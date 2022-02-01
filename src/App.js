import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/reset.css';
import './style/style.css';

import LoginPage from './components/LoginPage/index';
import RegistrationPage from './components/RegistrationPage/index';
import HomePage from './components/HomePage/index';
import CashEntryPage from './components/CashEntryPage/index';
import CashOutPage from './components/CashOutPage/index';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<RegistrationPage />} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/entrada" element={<CashEntryPage/>} />
                <Route path="/saida" element={<CashOutPage/>} />
            </Routes>
        </BrowserRouter>
    )
}