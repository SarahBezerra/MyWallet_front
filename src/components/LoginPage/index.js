import React, { useState } from "react"
import axios from "axios";
import { StyledAppName } from "../../style/StyledAppName";
import { StyledForm } from '../../style/StyledForm';
import { StyledLink } from "../../style/StyledLink";

export default function LoginPage(){

    return(
        <>
        <StyledAppName>MyWallet</StyledAppName>
        <StyledForm>
            <fieldset>
                <input type="email" placeholder="E-mail" name="email" required></input>
                <input type="password" placeholder="Senha" name="password" required></input>
                <button type="submit">Entrar</button>
            </fieldset>
        </StyledForm>
        <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </>
    )
}