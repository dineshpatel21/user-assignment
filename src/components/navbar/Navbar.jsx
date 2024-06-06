import React from "react";
import home from "../../assets/home.png";
import "./navbarStyle.css";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="center"
        style={{
          marginBottom: 37,
        }}
      >
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Home
        </a>
      </div>

      <div style={{ marginBottom: 37 }} className="center">
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Notifications
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Shop
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Conversation
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Wallet
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Supscription
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          My Profile
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Setting
        </a>
      </div>

      <div className="center" style={{ marginBottom: 37 }}>
        <img src={home} alt="home icon" className="icon" />
        <a href="#" style={{ marginLeft: 18 }}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default Navbar;
