import { Story, ComponentMeta } from '@storybook/react';

import { Title } from './Title';

export default {
  component: Title,
  title: 'Shared/Molecules/Data Display/Title',
} as ComponentMeta<typeof Title>;

const Template: Story = (_) => <Title>React</Title>;

export const Primary = Template.bind({});
Primary.args = {};
