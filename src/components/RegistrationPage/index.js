import React, { useState } from "react"
import axios from "axios";
import { StyledAppName } from "../../style/StyledAppName";
import { StyledForm } from '../../style/StyledForm';
import { StyledLink } from "../../style/StyledLink";

export default function RegistrationPage(){

    return(
        <>
        <StyledAppName>MyWallet</StyledAppName>
        <StyledForm>
            <fieldset>
                <input type="name" placeholder="Nome" name="name" required></input>
                <input type="email" placeholder="E-mail" name="email" required></input>
                <input type="password" placeholder="Senha" name="password" required></input>
                <input type="confirm_password" placeholder="Confirme a senha" name="confirm_password" required></input>
                <button type="submit">Cadastrar</button>
            </fieldset>
        </StyledForm>
        <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </>
    )
}