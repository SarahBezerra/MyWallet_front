import styled from "styled-components"

export const Header = styled.div`
    width: 100%;
    height: 78px;
    padding: 0 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top:0;
    z-index: 1;

    h1{
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    ion-icon{
        font-size: 32px;
        color: #FFFFFF;
    }
`

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 78px 25px 183px;

    .registries{
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
        background-color: #FFFFFF;
        padding: 8px 8px 5px 0;

        overflow: scroll;
    }

    .saldo {
        height: 40px;
        width: 100%;
        padding: 0 19px 0 11px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #FFFFFF;
        border-radius: 0 0 5px 5px ;
        font-size: 17px;

        p {
            font-weight: 700;
        }

        p.value {
            font-weight: 400;
        }
    }
`
export const Transition = styled.li`
    height: 35px;
    padding: 0 11px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 16px;
    color: #000000;

    span {
        display: flex;
    }

    .date {
        color: #C6C6C6;
        margin-right: 8px;
    }

    .value {
        color: ${props => (props.type === "entrada") ? "#03AC00" : "#C70000" };
        margin-left: 8px;
    }
`

export const Options = styled.div`
    width: 100%;
    height: 143px;
    padding: 0 25px;

    position: fixed;
    bottom: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        width: 155px;
        height: 114px;
        padding: 13px;

        background: #A328D6;
        color: #FFFFFF;
        border-radius: 5px;

        ion-icon {
            font-size: 26px;
        }

        p{
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            margin-top: 38px;
        }
    }
`