import styled from "styled-components";

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemInCartContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: flex-start;
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
  gap: 20px;
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
  font-size: 14px;
  line-height: 120%;
  color: #080b13;
`;

export const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  transition: 0.5s ease-in-out;
  padding: 10px;
  cursor: pointer;
  width: 90%;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
