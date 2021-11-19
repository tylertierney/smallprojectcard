import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SiteButton from "./SiteButton";

export default {
  title: "SiteButton",
  component: SiteButton,
} as ComponentMeta<typeof SiteButton>;

const Template: ComponentStory<typeof SiteButton> = (args: any) => (
  <SiteButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: "Live Site",
  link: "https://google.com",
  color: "#eb4034",
  textColor: "#696969",
};
