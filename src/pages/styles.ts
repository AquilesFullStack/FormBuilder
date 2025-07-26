import styled from "styled-components";
import { colors } from "../styles";

export const Form = styled.form`
    display: block;
    width: 100%;
    padding: 20px;
    background-color: ${colors.white};
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: ${colors.beige};
`;

export const Input = styled.input`
    width: 50%;
    color: ${colors.beige};
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;

`;

export const Button = styled.button`
    background-color: #e8c39e;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.875rem;
    margin-top: -10px;
    margin-bottom: 10px;
`;

export const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const StepTitle = styled.h3`
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
    text-align: center;
    font-size: 1.25rem;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #e8c39e;
`;

export const StepButton = styled.button`
    background-color: #e8c39e;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #e6d6c6ff
    }
`;
export const BackButton = styled.button`
    background-color: ${colors.beige};
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: #5a6268;
    }
`;

export const Summary = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
`;

export const SummaryItem = styled.p`
    color: ${colors.black};
    font-size: 15px;
    margin-top: -10px;
    margin-bottom: 10px;
`;

export const SuccessMessage = styled.p`
    color: ${colors.beige};
    font-size: 15px;
    margin-top: -10px;
    margin-bottom: 10px;
`;


