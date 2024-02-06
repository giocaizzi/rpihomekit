import { Button } from './Button';

export default {
  title: 'Buttons & links/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    // https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: 
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags : [ "autodocs"],
  // More on argTypes: 
  // https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  }
};

 export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
