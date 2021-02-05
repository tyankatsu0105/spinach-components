import * as React from "react";
import styled from "styled-components";

// --------------------------------------------
// setups
// --------------------------------------------

type Size = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
const sizeMap: Record<Size, string> = {
  h1: "6rem",
  h2: "3.75rem",
  h3: "3rem",
  h4: "2.125rem",
  h5: "1.5rem",
  h6: "1.25rem",
  body: "6rem",
};

// --------------------------------------------
// props
// --------------------------------------------

type Props = {
  /**
   * Relative size value
   * @default 'body'
   */
  size?: Size;

  /**
   * The as of `styled-components`
   * @default 'p'
   */
  as?: keyof React.ReactHTML;
};

// --------------------------------------------
// component
// --------------------------------------------

const Component: React.FC<Props> = (props) => {
  const as = props.as || "p";
  const size = props.size || "body";

  return (
    <StyledElement as={as} size={size}>
      {props.children}
    </StyledElement>
  );
};

// --------------------------------------------
// styles
// --------------------------------------------
const StyledElement = styled.h1<Pick<Props, "size">>`
  font-size: ${(props) => props.size && sizeMap[props.size]};
`;

export { Props, Component };
