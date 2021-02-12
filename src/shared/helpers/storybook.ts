import { Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const getTitle = (filename: string) => filename.split('.').shift()!;

export const storybookMeta = (
  filename: string,
  meta?: Omit<Meta, 'title'>
): Meta => {
  return {
    ...meta,
    title: getTitle(filename),
  };
};
