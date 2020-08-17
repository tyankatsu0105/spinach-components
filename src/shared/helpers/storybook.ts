import { Meta } from '@storybook/react/types-6-0';

const getTitle = (filename: string) => filename.split('.').shift()!

export const storybookMeta = (filename: string, meta?: Omit<Meta, 'title'>): Meta => {  
  return {
    ...meta,
    title: getTitle(filename)
  }
}