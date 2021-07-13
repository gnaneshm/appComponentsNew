import React from "react";
import Dropdown from "./index";

export default {
    title:"Components/Dropdown",
    component:Dropdown
}

const Template = args => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({})
DefaultDropdown.args = {};