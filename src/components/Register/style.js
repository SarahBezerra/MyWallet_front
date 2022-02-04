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
`

export const Fixed = styled.div`
    position: fixed;
    top: 95px;
`