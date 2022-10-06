import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Project, ProjectProps } from "./Project";

export default {
    title: 'Projects',
    component: Project
} as ComponentMeta<typeof Project>

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Portfolio',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
} as ProjectProps