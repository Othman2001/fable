import styled from "styled-components";

interface IActiveProps {
  isActive: boolean;
}

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 21px;
  margin-left: -58px;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const LogoWrapper = styled.div`
  height: 77px;
`;

export const ListWrapper = styled.ul<IActiveProps>`
  display: flex;
  flex-direction: row;
  gap: 36px;
  list-style: none;
`;

export const ListItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: #080b13;
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #080b136e;
  }
  @media (max-width: 768px) {
    z-index: 19;
  }
`;
