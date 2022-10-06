import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProjectInfo } from "./ProjectInfo";

export default {
    title: 'Project Info',
    component: ProjectInfo
} as ComponentMeta<typeof ProjectInfo> 

const Template: ComponentStory<typeof ProjectInfo> = (args) => <ProjectInfo {...args}>test data</ProjectInfo>

export const Default = Template.bind({})
Default.args = {
    open: true,
    title: "Projects"
}