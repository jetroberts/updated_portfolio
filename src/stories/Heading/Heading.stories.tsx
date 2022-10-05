import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Heading } from "./Heading";

export default {
    title: "Heading",
    component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Large = Template.bind({})
Large.args = {
    text: "Hi, I'm Josh",
    size: "lg"
}
export const Mid = Template.bind({})
Mid.args = {
    text: "Full Stack Software Developer",
    size: "md"
}
export const Small = Template.bind({})
Small.args = {
    text: "London based developer specialising in Go, React, and AWS",
    size: "sm"
}