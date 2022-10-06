import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Close } from "./Close";

export default {
    title: "Close",
    component: Close,
    argTypes: {
        onClick: {
            action: 'Clicked'
        }
    }
} as ComponentMeta<typeof Close> 

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />

export const Default = Template.bind({})
Default.args = {}