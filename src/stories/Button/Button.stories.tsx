import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: 'JR Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Primary Button',
    size: 'md',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Secondary Button'
}

export const Projects = Template.bind({})
Projects.args = {
    label: 'Projects',
    primary: true,
}

export const Size = Template.bind({})
Size.args = {
    label: 'More Info',
    primary: true,
    size: 'sm'
}

export const Margin = Template.bind({})
Margin.args = {
    label: 'More Info',
    primary: true,
    size: 'sm',
    margin: 3
}

