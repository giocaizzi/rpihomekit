import Box from './Box';

export default {
    title: 'Box/Box',
    component: Box,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    tags : [ "autodocs"],
};

export const Default = {}