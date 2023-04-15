import React from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.jpg";
import Global from "./Global";

export default function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.background}>
        <Global />
      </div>
      <div className={style.top}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <div className={style.content}>
          <h1>Services</h1>
          <h1>Contact</h1>
        </div>
      </div>

      <div className={style.bottom}>
        <div className={style.text}>
          <h1>Cresco Together!</h1>
          <p>Web 3.0 Unlocked: Embrace the Power of Digital Opulence.</p>
        </div>
      </div>
    </div>
  );
}
