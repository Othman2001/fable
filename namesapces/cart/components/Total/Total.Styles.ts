import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
  margin-left: -153px;
  @media (max-width: 768px) {
    margin-left: -56px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: #080b13;
`;

export const BoldText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #080b13;
`;
