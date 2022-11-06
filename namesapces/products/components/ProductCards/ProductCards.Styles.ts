import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: flex-start;
  margin-top: 100px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    display: grid;
    margin-left: 10px;
    margin-right: 10px;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-device-width: 900px) and (max-device-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  justify-self: flex-start;
`;

export const CardImage = styled.div`
  transition: 0.5s ease-in-out;
  z-index: 10;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  color: #080b13;
  opacity: 0.4;
  text-align: center;
  margin-top: 20px;
`;

export const ProductPrice = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  color: #080b13;
`;
