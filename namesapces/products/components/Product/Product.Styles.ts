import styled from "styled-components";

interface IProductBoxColorProps {
  isActive?: boolean;
  color: string;
}

export const siteMapWrapper = styled.div`
  margin-left: 10px;
`;

export const SiteMapText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  color: #080b13;
`;

export const ProductViewContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SliderWrapper = styled.div``;

export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 135%;
  color: #000000;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 135%;
  color: #000000;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductColorsWrapper = styled.div`
  display: flex;
  gap: 32px;
  order: 1;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    justify-content: center;
    order: 2;
  }
`;

export const ProductColorBox = styled.div<IProductBoxColorProps>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => (props.isActive ? "#000" : "")};
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const ProductSizeBoxContainer = styled.div`
  display: flex;
  gap: 32px;
  order: 2;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    order: 1;
    margin-bottom: 30px;
  }
`;

export const ProductSizeBox = styled.div<IProductBoxColorProps>`
  border: 1px solid ${(props) => (props.isActive ? "#000" : "")};
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #000000;
  padding: 10px 15px 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const ProductButton = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
  background: #080b13;
  padding: 12px 64px 12px 54px;
  transition: 0.5s ease-in-out;
  border: 1px solid #000000;
  margin-top: 30px;
  align-self: flex-start;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  margin-top: 32px;
  margin-bottom: 50px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
