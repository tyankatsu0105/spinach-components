import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const getTitle = (filename: string) => filename.split('.').shift()!;

type Group = 'Components' | 'Theme';

export const storybookMeta = (
  requiredOption: {
    title: {
      filename: string;
      group: Group;
    };
    readme: string;
  },
  meta?: Omit<Meta, 'title'>
): Meta => {
  return {
    ...meta,
    title: `${requiredOption.title.group}/${getTitle(
      requiredOption.title.filename
    )}`,
    parameters: {
      docs: {
        // eslint-disable-next-line react/display-name
        page: () => (
          <>
            <Title />
            <Description markdown={requiredOption.readme} />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
          </>
        ),
      },
    },
  };
};
