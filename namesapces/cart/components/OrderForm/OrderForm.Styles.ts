import styled from "styled-components";

export const FormContainer = styled.div`
  @media (max-width: 786px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Text = styled.h3`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 100px;
  margin-right: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: #080b13;
  color: #ffffff;
  padding: 10px;
  width: 44%;
  margin-left: 28%;
  transition: 0.5s ease-in-out;
  border: 1px solid #000;
  margin-bottom: 30px;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
