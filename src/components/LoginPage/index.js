import React, { useState } from "react"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router"

import { StyledAppName } from "../../style/StyledAppName"
import { StyledForm } from '../../style/StyledForm'
import { StyledLink } from "../../style/StyledLink"

export default function LoginPage(){

    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(true);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    
    function handleInputChange(e){
    setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    function setAndPersistToken(token) {
		localStorage.setItem("token", token);
	}
    
    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false);
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, loginData);
        
        promise.then(response => {
            setIsEnabled(true)
            setAndPersistToken(response.data)
            navigate("/home")
        })
        promise.catch(error => {
            setIsEnabled(true)
            alert(error.response.data)
        })
    }
      

    return(
        <>
        <StyledAppName>MyWallet</StyledAppName>
        <StyledForm onSubmit={handleLogin} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="email" placeholder="E-mail" name="email" value={loginData.email} onChange={handleInputChange} required></input>
                <input type="password" placeholder="Senha" name="password" value={loginData.password} onChange={handleInputChange} required></input>
                <button type="submit">{isEnabled ? "Entrar" : <ThreeDots type="ThreeDots" color="#FFF" height={13} width={38} />}</button>
            </fieldset>
        </StyledForm>
        <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </>
    )
}