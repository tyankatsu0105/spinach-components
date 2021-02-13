import * as React from 'react';

import { SpinachComponent } from '../../shared/types/SpinachComponent';

import * as Text from '../text';

// --------------------------------------------
// props
// --------------------------------------------

type FeatureProps = Text.FeatureProps;

// --------------------------------------------
// component
// --------------------------------------------

const Component: SpinachComponent<'a', FeatureProps> = (props) => {
  const { textSize = 'body', component = 'a', ...restProps } = props;

  return (
    <Text.Component {...restProps} textSize={textSize} component={component}>
      {props.children}
    </Text.Component>
  );
};

export { FeatureProps, Component };
