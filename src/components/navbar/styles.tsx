import styled from "@emotion/styled";
import {breakPoints} from "../theme";

export interface ContainerProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  max-width: ${breakPoints.large};

  @media (max-width: ${breakPoints.md}) {
    padding-left: 25px;
    padding-right: 25px;
    height: 80px;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  p {
    cursor: pointer;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  max-width: ${breakPoints.large};
  width: 100%;
`;
