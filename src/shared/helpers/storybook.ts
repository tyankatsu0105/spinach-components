import { Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const getTitle = (filename: string) => filename.split('.').shift()!;

type Group = 'Components' | 'Theme';

export const storybookMeta = (
  title: {
    filename: string;
    group: Group;
  },
  meta?: Omit<Meta, 'title'>
): Meta => {
  return {
    ...meta,
    title: `${title.group}/${getTitle(title.filename)}`,
  };
};
