import styled from "@emotion/styled";
import {breakPoints, colors} from "../components/theme";

export const MainContent = styled.div`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: ${breakPoints.large};
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: "100%";
  height: "100%";
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;
