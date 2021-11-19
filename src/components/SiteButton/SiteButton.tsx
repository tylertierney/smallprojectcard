import React from "react";

import { useRef, useEffect } from "react";

import "./SiteButton.css";

import { BsArrowUpRight } from "react-icons/bs";

export interface SiteBtnProps {
  text: string;
  link: string;
  color: string;
  textColor: string;
}

const SiteButton: React.FC<SiteBtnProps> = ({
  text,
  link,
  color,
  textColor,
}) => {
  const btnRef: any = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.style.setProperty("--custom-color", color);
      btnRef.current.style.setProperty("--custom-text-color", textColor);
    }
  }, []);

  return (
    <button
      className="siteButton"
      ref={btnRef}
      style={{
        borderColor: color,
        transition: "0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <a
        rel="noreferrer"
        href={link}
        style={{ textDecoration: "none", color: "inherit" }}
        target="_blank"
      >
        <div className="flexRow">
          <span style={{ marginRight: "0.2rem", userSelect: "none" }}>
            {text}
          </span>
          <BsArrowUpRight style={{ userSelect: "none" }} />
        </div>
      </a>
    </button>
  );
};

export default SiteButton;
