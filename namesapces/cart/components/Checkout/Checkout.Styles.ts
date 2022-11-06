import styled from "styled-components";

export const CheckOutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ItemsWrapper = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const ItemInCartContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const itemInCartTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #080b13;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ItemInCartSubtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: rgba(60, 55, 55, 0.8);
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const DataText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #080b13;
`;
export const UserChoiceText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  color: #080b13;
  margin-bottom: 15px;
`;

export const FormContainer = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const ButtonIcon = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

export const ErrorTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 250px;
`;

export const ErrorText = styled.h2`
  align-self: center;
  color: #6674ab;
`;
