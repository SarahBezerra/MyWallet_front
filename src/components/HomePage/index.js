import { Header, Container, Options } from './style'

export default function HomePage(){
    return(
        <>
        <Header>
            <h1>Olá, Fulano</h1>
            <ion-icon name="exit-outline"></ion-icon>
        </Header>
        <Container><div>Não há registros de entrada ou saída</div></Container>
        <Options>
            <div><ion-icon name="add-circle-outline"></ion-icon><p>Nova entrada</p></div>
            <div><ion-icon name="add-circle-outline"></ion-icon><p>Nova saída</p></div>
        </Options>
        </>
    )
}