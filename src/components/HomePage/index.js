import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Header, Container, Options } from './style'
import Registry from './Registry';
import { useNavigate } from 'react-router';

export default function HomePage(){

    const tokenOnLocalStorage = localStorage.getItem("token");
    const [ registries, setRegistries ] = useState([]);   
    const [ name, setName ] = useState("");
    const [ saldo, setSaldo ] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenOnLocalStorage}`
            }
        }

        const promise = axios.get("http://localhost:5000/statement", config);

        promise.then(response => {
            setRegistries(response.data.registries)
            setName(response.data.name)
            setSaldo(response.data.saldo)
        })

        promise.catch(error => {
            console.log(error.response.data)
        })

    }, [tokenOnLocalStorage]);

    function logout() {
        localStorage.removeItem('token');
        navigate("/")
    }

    if(!registries){
        return("carregando");
    }

    return(
        <>
        <Header>
            <h1>Olá, {name}</h1>
            <button onClick={logout}><ion-icon name="exit-outline"></ion-icon></button>
        </Header>
        <Container saldo={saldo}>
            <div className="registries" registries={registries.length}>
                {(registries.length === 0) ?
                    <p>Não há registros de<br/>entrada ou saída</p>
                    :
                    <ul>
                        {registries?.map(registry => 
                            <Registry key={registry._id} {...registry} setRegistries={setRegistries} registries={registries}/>
                        )}
                    </ul>
                }
            </div>
            <div className="saldo">
                {(registries.length === 0) ? 
                    <p></p>
                    :
                    <>
                    <p>SALDO</p>
                    <p className="value">R$ {saldo}</p>
                    </>
                }
            </div>
        </Container>
        <Options>
            <Link to="/registrar/entrada"><div><ion-icon name="add-circle-outline"></ion-icon><p>Nova<br/>entrada</p></div></Link>
            <Link to="/registrar/saida"><div><ion-icon name="remove-circle-outline"></ion-icon><p>Nova<br/>saída</p></div></Link>
        </Options>
        </>
    )
}