import * as React from 'react';
import styled from 'styled-components';

import { filename } from 'paths.macro';

import { storybookMeta } from '../../shared/helpers';

import { theme } from '../styles/theme';

import readme from './README.md';

export default storybookMeta({
  title: {
    filename,
    group: 'Theme',
  },
  readme,
});

export const Palettes = (): React.ReactElement => (
  <ul>
    {Object.entries(theme.palettes).map(([paletteKey, paletteValues]) => (
      <li key={paletteKey} className="mb-10">
        <p className="text-2xl">{paletteKey}</p>
        <ul className="flex">
          {Object.entries(paletteValues).map(([colorKey, colorValue]) => (
            <li key={colorKey}>
              <PalleteColorItem color={colorValue}></PalleteColorItem>
              {colorKey}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

const PalleteColorItem = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
`;
