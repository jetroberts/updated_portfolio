import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navigation } from "./Navigation";
import "./Navigation.css"

export default {
    title: 'Navigation',
    component: Navigation
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args}/>

export const Nav = Template.bind({})
Nav.args = {
    NavigationItems: [
        {
            name: 'Home',
            link: '#'
        },
        {
            name: 'About',
            link: '#'
        },
        {
            name: 'Blog',
            link: '#'
        },
        {
            name: 'Projects',
            link: '#'
        }
    ]
}