import styled from "@emotion/styled";
import {colors, ColorsProps} from "../theme";

export interface ITextProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string | React.ReactNode;
  color: typeof colors[keyof typeof colors] | "light";
  fontWeight: 700 | 600 | 400;
  fontSize:
    | "83px"
    | "64px"
    | "48px"
    | "32px"
    | "30px"
    | "24px"
    | "18px"
    | "16px"
    | "14px"
    | "11px";
  lineHeight?: string;
  textAlign?: string;
  marginTop?: string;
}

export const StyledText = styled.p<ITextProps>`
  margin: 0;
  padding: 0;
  ${({textAlign}) => textAlign && `text-align: ${textAlign};`}
  ${({marginTop}) => marginTop && `margin-top: ${marginTop};`}
  line-height: ${({lineHeight}) => lineHeight || "110%"};
  font-size: ${({fontSize}) => fontSize || "16px"};
  font-weight: ${({fontWeight}) => fontWeight || 400};
  color: ${({color}) => color || colors.purple}};
  span {
    padding-bottom: 10px;
    border-bottom: 14px solid ${colors.sweetBlue};
  }
`;
