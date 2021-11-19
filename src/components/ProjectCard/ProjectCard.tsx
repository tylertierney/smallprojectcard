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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          outline: "3px solid white",
          height: "400px",
          width: "400px",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
        }}
        className="projectCard"
      >
        <img
          className="smallCardImage"
          style={{
            objectFit: "cover",
            height: "90%",
            transition: "0.3s ease-in-out",
            filter: "none",
          }}
          src={project.desktop_screenshot}
        />
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "80%",
            borderRadius: "10px",
            position: "absolute",
            transition: "0.3s ease-in-out",
            boxShadow: "0px 0px 10px 1px rgb(0, 0, 0, 0.7)",
          }}
          className="flexColumn infoCard"
        >
          <div
            className="flexRow"
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
        </div>
      </div>
    </div>
  );
};

export default SmallProjectCard;
