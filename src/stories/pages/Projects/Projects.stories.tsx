import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Projects } from "./Projects";

export default {
    title: 'projects',
    component: Projects
} as ComponentMeta<typeof Projects>

const Template: ComponentStory<typeof Projects> = (args) => <Projects />