import styled from "styled-components"

export const StyledForm = styled.form`
    border-radius: 5px;

    fieldset{
        display:flex;
        flex-direction: column;

        input{
            width: 326px;
            height: 58px;
            margin-bottom: 13px;

            background-color: #FFFFFF;
            border-radius: 5px;
            border: none;
            padding: 15px;

            ::placeholder{
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #808080;
            }
        }

        button{
            width: 326px;
            height: 46px;

            background-color: #A328D6;
            border-radius: 5px;
            border: none;

            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
`