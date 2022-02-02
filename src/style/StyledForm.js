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

            background-color: ${(props) => props.enabled ? "#FFFFFF" : "#F0F8FF"};
            border-radius: 5px;
            border: none;
            padding: 15px;

            color: ${(props) => props.enabled ? "#000" : "#808080"};
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

            ::placeholder{
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #808080;
            }
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 326px;
            height: 46px;

            background-color: #A328D6;
            border-radius: 5px;
            border: none;
            opacity: ${(props) => props.enabled ? 1 : 0.7};

            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
`