import React from "react";

import "./ProjectCard.css";

import SiteButton from "../SiteButton/SiteButton";

export interface ProjectProps {
  title: string;
  description: string;
  hostedsite: string;
  github: string;
  desktop_screenshot: string | undefined;
  mobile_screenshot: string | undefined;
  mobile_screenshot2: string | undefined;
  mobile_screenshot3: string | undefined;
  featured_image: string;
  local_url: string;
  tech_stack: any;
  color: string;
}

export interface SmallProjectProps {
  project: ProjectProps;
}

const SmallProjectCard: React.FC<SmallProjectProps> = ({ project }) => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     width: "100vw",
    //     backgroundColor: "gray",
    //     fontFamily: "sans-serif",
    //   }}
    // >
    <div
      style={{
        border: "3px solid white",
        height: "290px",
        width: "340px",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        fontFamily: "inherit",
      }}
      className="projectCard"
    >
      <img
        className="smallCardImage"
        style={{
          objectFit: "cover",
          height: "90%",
          transition: "0.3s ease-in-out",
        }}
        src={project.desktop_screenshot}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "80%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          position: "absolute",
          transition: "0.3s ease-in-out",
          boxShadow: "0px 0px 10px 1px rgb(0, 0, 0, 0.7)",
        }}
        className="flexColumn infoCard"
      >
        <div
          className="flexRowSpaceBetween"
          style={{ padding: "0.5rem", height: "20%", width: "100%" }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              paddingLeft: "0.3rem",
              color: project.color,
            }}
          >
            {project.title}
          </span>
          <SiteButton
            text="Live Site"
            link={project.hostedsite}
            color={project.color}
            textColor="#696969"
          />
        </div>
        <div
          className="flex"
          style={{
            padding: "0rem 1rem",
            height: "80%",
            color: "#696969",
            userSelect: "none",
          }}
        >
          {project.description}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SmallProjectCard;
