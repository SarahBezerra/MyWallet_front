import { React } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Transition } from "./style";

export default function Registry({ type, description, value, date, _id, setRegistries }){

    const navigate = useNavigate();

    function deleteRegistry(){
        const confirmDeletion = window.confirm(`Realmente deseja deletar o registro?\n${date} : R$${value}`);

        if(confirmDeletion){
            const promise = axios.delete(`http://localhost:5000/deleteRegistry/${_id}`);

            promise.then(response => {
                setRegistries(response.data)
            })

            promise.catch(error => {
                console.log(error.response.data)
            })
        }
    }

    return(
        <Transition type={type}> 
            <span>
                <div className="date">{date}</div>
                <div className="description">{description}</div>
            </span>
            <span>
                <div className="value">{value}</div>
                <button onClick={deleteRegistry}>x</button>
            </span>
        </Transition>
    )
}

