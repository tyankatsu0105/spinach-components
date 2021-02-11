import * as React from 'react'


import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

import {theme} from "../src/components/styles/theme";

const withThemeProvider=(Story,context)=>{
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </BrowserRouter>
  )
}
export const decorators = [withThemeProvider];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}