import styled from "styled-components";

interface IProductBoxColorProps {
  isActive?: boolean;
  color?: string;
}

export const Container = styled.div``;
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
  justify-content: center;
  margin-left: 60px;
  margin-right: 60px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 60px;
    margin-right: 60px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 30px;
  margin-top: 100px;
  padding-left: 100px;
  padding-right: 117px;
  @media (max-width: 768px) {
    padding-left: 100px;
    padding-right: 117px;
  }
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
  border: 1px solid;
  transition: 0.5ms ease-in-out color;
  border-color: ${(props) => (props.isActive ? "#000000" : " #8f8f8f")};
  &:hover {
    cursor: pointer;
  }
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
  /* border: 1px solid ${(props) => (props.isActive ? "#0000" : "#0000")}; */
  border: 1px solid;
  border-color: ${(props) => (props.isActive ? "#000000" : " #8f8f8f")};
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  transition: 0.5ms ease-in-out color;
  text-align: center;
  color: #000000;
  padding: 10px 15px 10px;
  /* background-color: ${(props) => (props.isActive ? "red" : "#ffffff")}; */
  @media (max-width: 768px) {
    padding: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProductButton = styled.button`
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
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
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

export const Center = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
