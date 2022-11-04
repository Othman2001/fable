import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    display: grid;
    margin-left: 10px;
    margin-right: 10px;
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ProductPrice = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 135%;
  text-align: center;
  color: #080b13;
`;
