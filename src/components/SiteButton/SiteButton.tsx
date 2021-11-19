import React from "react";

import { useRef, useEffect } from "react";

import "./SiteButton.css";

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
      console.log(btnRef.current.classList);
    }
  }, []);

  const addColorsOnHover = (e: any) => {
    e.target.style.backgroundColor = color;
    e.target.style.color = "white";
  };

  const removeColors = (e: any) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = textColor;
  };

  return (
    <button
      className="siteButton"
      ref={btnRef}
      style={{
        borderColor: color,
        color: textColor,
        transition: "0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => addColorsOnHover(e)}
      onMouseLeave={(e) => removeColors(e)}
      onTouchStart={(e) => addColorsOnHover(e)}
    >
      <a
        rel="noreferrer"
        href={link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {text}
      </a>
    </button>
  );
};

export default SiteButton;
