import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Intro } from "./Intro";

export default {
    title: "Intro",
    component: Intro
} as ComponentMeta<typeof Intro>

const Template: ComponentStory<typeof Intro> = () => <Intro />

export const Primary = Template.bind({})