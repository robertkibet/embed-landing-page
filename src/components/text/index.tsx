import React from "react";
import {StyledText, ITextProps} from "./styles";

const Text = ({
  content,
  lineHeight,
  fontSize,
  color,
  fontWeight,
  textAlign,
  marginTop,
  ...rest
}: ITextProps) => (
  <StyledText
    color={color}
    lineHeight={lineHeight}
    textAlign={textAlign}
    fontSize={fontSize}
    marginTop={marginTop}
    fontWeight={fontWeight}
    {...rest}
  >
    {content}
  </StyledText>
);

export default Text;
