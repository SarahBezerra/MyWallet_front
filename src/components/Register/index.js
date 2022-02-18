import axios from "axios";
import React, { useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

import { Header, Fixed } from "./style";
import { StyledForm } from "../../style/StyledForm";

export default function Register(){

    const navigate = useNavigate();
    const tokenOnLocalStorage = localStorage.getItem("token");
    const { registryType } = useParams();
    const [isEnabled, setIsEnabled] = useState(true);
    const [ registrationData, setRegistrationData ] = useState({
        value: "",
        description: "",
    });
    const config = {
        headers: {
            "Authorization": `Bearer ${tokenOnLocalStorage}`
        }
    }

    function handleInputChange(e){
    setRegistrationData({...registrationData, [e.target.name]: e.target.value})
    }
    
    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false);

        registrationData.value = parseFloat(registrationData.value).toFixed(2);

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/register/${registryType}`, registrationData, config);
        
        promise.then(response => {
            setIsEnabled(true)
            navigate("/home")
        })
        promise.catch(error => {
            setIsEnabled(true)
            alert(error.response.data)
        })
    }

    return(
        <>
        <Header>
            <h1>Nova {registryType}</h1>
        </Header>
        <Fixed>
        <StyledForm onSubmit={handleLogin} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="number" placeholder="Valor" name="value" value={registrationData.value} onChange={handleInputChange} required></input>
                <input type="description" placeholder="Descrição (max 13 caracteres)" name="description" value={registrationData.description} onChange={handleInputChange} required></input>
                <button type="submit">Salvar {registryType}</button>
            </fieldset>
        </StyledForm>
        </Fixed>
        </>
    )
}