import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Header, Container, Options } from './style'
import Registry from './Registry';

export default function HomePage({ token }){

    const [ registries, setRegistries ] = useState([]);   
    const [ name, setName ] = useState("");
    const [ saldo, setSaldo ] = useState(0);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get("http://localhost:5000/extrato", config);

        promise.then(response => {
            setRegistries(response.data.registries)
            setName(response.data.name)
            setSaldo(response.data.saldo)
        })

        promise.catch(error => {
            console.log(error.response.data)
        })

    }, []);

    if(!registries){
        return("carregando");
    }

    return(
        <>
        <Header>
            <h1>Olá, {name}</h1>
            <ion-icon name="exit-outline"></ion-icon>
        </Header>
        <Container>
            <div className="registries">
                {(registries.length === 0) ?
                    <p>Não há registros de entrada ou saída</p>
                    :
                    <ul>
                        {registries?.map(registry => 
                            <Registry key={registry._id} {...registry}/>
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
            <Link to="/registrar/entrada"><div><ion-icon name="add-circle-outline"></ion-icon><p>Nova entrada</p></div></Link>
            <Link to="/registrar/saida"><div><ion-icon name="add-circle-outline"></ion-icon><p>Nova saída</p></div></Link>
        </Options>
        </>
    )
}