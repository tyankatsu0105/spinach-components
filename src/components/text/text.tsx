import * as React from "react";
import styled from "styled-components";

import { SpinachComponent } from "../../shared/types/SpinachComponent";
// --------------------------------------------
// setups
// --------------------------------------------


const sizeMap = {
  h1: "6rem",
  h2: "3.75rem",
  h3: "3rem",
  h4: "2.125rem",
  h5: "1.5rem",
  h6: "1.25rem",
  subtitle: "1rem",
  body: "0.875rem",
};

// --------------------------------------------
// props
// --------------------------------------------

type FeatureProps = {
  /**
   * Relative size value
   * @default 'body'
   */
  textSize?: keyof typeof sizeMap;
}


// --------------------------------------------
// component
// --------------------------------------------

const Component: SpinachComponent<'p', FeatureProps> = (props) => {
  const {textSize = 'body', component, ...restProps} = props;

  return <StyledElement {...restProps} textSize={textSize} as={component as undefined}>{props.children}</StyledElement>
};

// --------------------------------------------
// styles
// --------------------------------------------
const StyledElement = styled.p<FeatureProps>`
  font-size: ${(props) => props.textSize && sizeMap[props.textSize]};
`;

export { FeatureProps, Component, sizeMap };
