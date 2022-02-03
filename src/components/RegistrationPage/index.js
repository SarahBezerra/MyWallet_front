import React, { useState } from "react"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router"

import { StyledAppName } from "../../style/StyledAppName"
import { StyledForm } from '../../style/StyledForm'
import { StyledLink } from "../../style/StyledLink"

export default function RegistrationPage(){

    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(true);
    const [registrationData, setRegistrationData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    
    function handleInputChange(e){
        setRegistrationData({...registrationData, [e.target.name]: e.target.value})
        console.log(registrationData)
    }
    
    function handleRegistration(e){
        e.preventDefault();
        setIsEnabled(false);

        if(e.target.password.value !== e.target.confirm_password.value){
            alert("Confirme sua senha para prosseguir")
            setIsEnabled(true)
            return
        }

        const promise = axios.post("http://localhost:5000/cadastro", {
            name: registrationData.name,
            email: registrationData.email,
            password: registrationData.password
        });
        
        promise.then(response => {
            setIsEnabled(true)
            console.log(response.data)
            navigate("/")
        })
        promise.catch(error => {
            setIsEnabled(true)
            alert(error.response.data)
        })
    }


    return(
        <>
        <StyledAppName>MyWallet</StyledAppName>
        <StyledForm onSubmit={handleRegistration} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="name" placeholder="Nome" name="name" value={registrationData.name} onChange={handleInputChange} required></input>
                <input type="email" placeholder="E-mail" name="email" value={registrationData.email} onChange={handleInputChange} required></input>
                <input type="password" placeholder="Senha" name="password" value={registrationData.password} onChange={handleInputChange} required></input>
                <input type="password" placeholder="Confirme a senha" name="confirm_password" value={registrationData.confirm_password} onChange={handleInputChange} required></input>
                <button type="submit">{isEnabled ? "Cadastrar" : <ThreeDots type="ThreeDots" color="#FFF" height={13} width={38} />}</button>
            </fieldset>
        </StyledForm>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </>
    )
}