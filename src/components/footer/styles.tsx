import styled from "@emotion/styled";
import {breakPoints, colors} from "../theme";

export const MoreLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0;
  justify-content: start;

  li {
    display: inline;
    padding: 0 10px;
    border-left: solid 1px ${colors.white};
  }
  li:first-of-type {
    border-left: none;
    padding: 0;
  }
  p {
    cursor: pointer;
  }
`;
export const EmbedLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 181px;
  width: max-content;
  flex-direction: row;
`;
export const EmbedFooterInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 40px;
  flex-direction: column;
  max-width: 465px;
  width: 100%;
`;
export const EmbedLogo = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 30px;
  flex-direction: column;
`;
export const FooterItems = styled.div`
  max-width: ${breakPoints.large};
  margin-left: 277px;
  margin-right: 315px;
  margin-top: 157px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 30px;

  @media (min-width: ${breakPoints.md}) {
    .footer-copy-mobile {
      display: none;
    }
  }
  @media (max-width: ${breakPoints.md}) {
    flex-direction: column;
    align-items: center;
    * {
      align-items: center;
      text-align: center;
    }
    .footer-copy {
      display: none;
    }
  }
`;
export const FooterWrapper = styled.footer`
  width: 100%;
  height: 868px;
  background-color: ${colors.purple};
  display: flex;
  justify-content: center;
  align-items: start;
  @media (max-width: ${breakPoints.md}) {
    height: 733px;
  }
`;
