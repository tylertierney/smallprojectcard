import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SmallProjectCard from "./ProjectCard";

export default {
  title: "SmallProjectCard/SmallProjectCard",
  component: SmallProjectCard,
} as ComponentMeta<typeof SmallProjectCard>;

const sampleProj = {
  title: "Application Tracker",
  description: "please just work, please",
  hostedsite: "https://movieworm.netlify.app/",
  github: "https://github.com/tylertierney/movieworm",
  desktop_screenshot: "",
  mobile_screenshot: "",
  mobile_screenshot2: "",
  mobile_screenshot3: "",
  featured_image: "/images/movieworm_iphone_mockups.png",
  local_url: "movieworm",
  tech_stack: [
    {
      name: "React",
      icon: "FaReact",
    },
    {
      name: "Chakra UI",
      icon: "BsLightningFill",
    },
    {
      name: "Node JS",
      icon: "FaNodeJs",
    },
    {
      name: "MongoDB",
      icon: "SiMongodb",
    },
    {
      name: "Auth0",
      icon: "SiAuth0",
    },
  ],
  color: "#DCB2D4",
};
const sampleProj2 = {
  title: "MovieWorm",
  description: "please just work, please",
  hostedsite: "https://movieworm.netlify.app/",
  github: "https://github.com/tylertierney/movieworm",
  desktop_screenshot:
    "https://underconstructionpage.com/wp-content/uploads/2018/12/crello.png",
  mobile_screenshot: "",
  mobile_screenshot2: "",
  mobile_screenshot3: "",
  featured_image: "/images/movieworm_iphone_mockups.png",
  local_url: "movieworm",
  tech_stack: [
    {
      name: "React",
      icon: "FaReact",
    },
    {
      name: "Chakra UI",
      icon: "BsLightningFill",
    },
    {
      name: "Node JS",
      icon: "FaNodeJs",
    },
    {
      name: "MongoDB",
      icon: "SiMongodb",
    },
    {
      name: "Auth0",
      icon: "SiAuth0",
    },
  ],
  color: "#DCB2D4",
};

const Template: ComponentStory<typeof SmallProjectCard> = (args: any) => (
  <SmallProjectCard {...args} />
);

export const ApplicationTracker = Template.bind({});

ApplicationTracker.args = {
  project: sampleProj,
  isDarkMode: false,
};

export const MovieWorm = Template.bind({});

MovieWorm.args = {
  project: sampleProj2,
  isDarkMode: true,
};
