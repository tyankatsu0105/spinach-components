import * as React from 'react';
import styled from 'styled-components';

import { SpinachComponent } from '../../shared/types/SpinachComponent';

import * as Helpers from './helpers';

// --------------------------------------------
// props
// --------------------------------------------

type FeatureProps = {
  /**
   * Relative size value
   * @default 'body'
   */
  readonly textSize?: keyof typeof Helpers.sizeMap;
};

// --------------------------------------------
// component
// --------------------------------------------

const Component: SpinachComponent<'p', FeatureProps> = (props) => {
  const { textSize = 'body', component, ...restProps } = props;

  return (
    <StyledElement
      {...restProps}
      textSize={textSize}
      as={component as undefined}
    >
      {props.children}
    </StyledElement>
  );
};

// --------------------------------------------
// styles
// --------------------------------------------

const StyledElement = styled.p<FeatureProps>`
  font-size: ${(props) => props.textSize && Helpers.sizeMap[props.textSize]};
`;

export { FeatureProps, Component };
