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
    label: 'Primary Button'
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

