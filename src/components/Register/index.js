import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router"

export default function Register({ token }){

    const { tipo_de_registro } = useParams();
    console.log(tipo_de_registro)

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(`http://localhost:5000/registrar/${tipo_de_registro}`, config);

        promise.then(response => {
            console.log(response.data)
        })

        promise.catch(error => {
            console.log(error.response.data)
        })

    }, []);

    return(
        <h1>Register</h1>
    )
}