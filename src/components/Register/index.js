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
        const promise = axios.post(`http://localhost:5000/registrar/${tipo_de_registro}`, registrationData, config);
        
        promise.then(response => {
            setIsEnabled(true)
            console.log(response.data)
            navigate("/home")
        })
        promise.catch(error => {
            setIsEnabled(true)
            console.log(error.response.data)
        })
    }

    return(
        <>
        <Header>
            <h1>Nova entrada|saída</h1>
        </Header>
        <Fixed>
        <StyledForm onSubmit={handleLogin} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="value" placeholder="Valor" name="value" value={registrationData.value} onChange={handleInputChange} required></input>
                <input type="description" placeholder="Descrição" name="description" value={registrationData.description} onChange={handleInputChange} required></input>
                <button type="submit">Salvar entrada|saída</button>
            </fieldset>
        </StyledForm>
        </Fixed>
        </>
    )
}