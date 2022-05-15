import styled from "@emotion/styled";
import {IButtonProps} from ".";
import {colors} from "../theme";
export const DefaultButton = styled.button<IButtonProps>`
  border-radius: 12px;
  width: 222px;
  height: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 85.5%;
  padding: 0px 20px 0px 13px;
  color: ${({variant}) => {
    if (variant === "primary") {
      return colors.darkGrey;
    }
    if (variant === "clear") {
      return colors.white;
    }
    return colors.white;
  }};
  box-shadow: 0 0 6px 0 rgba(240, 89, 252, 1);
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #f059fc, #00b6ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${({background}) => background || "#fff"} inset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    box-shadow: 2px 1000px 1px #e5e5e5 inset;
    color: ${({variant}) => {
      if (variant === "primary") {
        return colors.midPurple;
      }
      if (variant === "clear") {
        return colors.white;
      }
      return colors.white;
    }} !important;
  }

  &:active {
    color: ${({variant}) => {
      if (variant === "primary") {
        return colors.lightPurple;
      }
      if (variant === "clear") {
        return colors.white;
      }
      return colors.white;
    }} !important;
  }
`;
