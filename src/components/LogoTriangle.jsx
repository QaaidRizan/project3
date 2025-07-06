import React from "react";
import Logo2 from "@/assert/Logo2.png"; // Adjust the import if needed

const LogoTriangle = () => (
  <div style={{ position: "relative", width: 300, height: 180 }}>
    {/* White triangle background using SVG */}
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 180"
      style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      preserveAspectRatio="none"
    >
      <polygon points="0,0 300,0 150,180" fill="#fff" />
    </svg>
    {/* Logo centered */}
    <div
      style={{
        position: "absolute",
        top: "53%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        width: "75%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Logo2}
        alt="Your Logo"
        style={{ maxWidth: "100%", maxHeight: 90, objectFit: "contain" }} // Reduced maxHeight from 110 to 70
      />
    </div>
  </div>
);

export default LogoTriangle;
