import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title } from "./Title";

export default {
    title: 'Title',
    component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}>Title</Title>

export const Default = Template.bind({})
Default.args = {
    weight: "light"
}