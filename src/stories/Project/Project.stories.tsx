import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Project, ProjectProps } from "./Project";

export default {
    title: 'projects',
    component: Project
} as ComponentMeta<typeof Project>

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Portfolio',
    content: 'Created a portfolio using react' 
} as ProjectProps