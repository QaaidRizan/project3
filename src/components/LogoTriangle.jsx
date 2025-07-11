import React from "react";
import Logo2 from "@/assert/Logo2.png"; // Adjust the import if needed

const LogoTriangle = () => (
  <div style={{ position: "relative", height: "80px", display: "flex", alignItems: "center" }}>
    {/* Logo only - triangle removed */}
    <img
      src={Logo2}
      alt="Terrene Engineering Logo"
      style={{ 
        maxHeight: "70px",
        objectFit: "contain"
      }}
    />
  </div>
);

export default LogoTriangle;
