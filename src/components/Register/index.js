import axios from "axios";
import React, { useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"

import { Header, Fixed } from "./style";
import { StyledForm } from "../../style/StyledForm";

export default function Register({ token }){

    const navigate = useNavigate();
    const { tipo_de_registro } = useParams();
    const [isEnabled, setIsEnabled] = useState(true);
    const [ registrationData, setRegistrationData ] = useState({
        value: "",
        description: "",
        type: tipo_de_registro
    });
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function handleInputChange(e){
    setRegistrationData({...registrationData, [e.target.name]: e.target.value})
    }
    
    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false);

        registrationData.value = parseFloat(registrationData.value).toFixed(2);
        console.log(registrationData.value)

        const promise = axios.post(`http://localhost:5000/registrar/${tipo_de_registro}`, registrationData, config);
        
        promise.then(response => {
            setIsEnabled(true)
            console.log(response.data)
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
            <h1>Nova {tipo_de_registro}</h1>
        </Header>
        <Fixed>
        <StyledForm onSubmit={handleLogin} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="number" placeholder="Valor" name="value" value={registrationData.value} onChange={handleInputChange} required></input>
                <input type="description" placeholder="Descrição (max 13 caracteres)" name="description" value={registrationData.description} onChange={handleInputChange} required></input>
                <button type="submit">Salvar {tipo_de_registro}</button>
            </fieldset>
        </StyledForm>
        </Fixed>
        </>
    )
}