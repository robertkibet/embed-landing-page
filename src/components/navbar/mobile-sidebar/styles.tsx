import styled from "@emotion/styled";
import {colors} from "../../theme";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.purple};
  z-index: 100;
  display: block;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-top: 20px;
`;
export const SidebarContent = styled.div`
  display: flex;
  width: 95%;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;
