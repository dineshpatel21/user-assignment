import React from "react";

function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: 260, height: 80, backgroundColor: "#ffffff" }}>
        logo
      </div>
      <div>searchbar</div>
      <div style={{ width: 260, height: 80, backgroundColor: "#88C2BB" }}>become a seller</div>
    </div>
  );
}

export default Topbar;
