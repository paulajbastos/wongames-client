import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'By Now'
}

export const withIcon: Story = (args) => <Button {...args} />

Default.args = {
  size: 'small',
  children: 'By Now',
  icon: <AddShoppingCart />
}
