import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  const data = [
    {
      name: "Cloud Computing",
    },
    {
      name: "Kubernetes, Docker and Microservices",
    },
    {
      name: "AI and Machine Learning",
    },
    {
      name: "Edge Computing  ",
    },
    {
      name: "Internet of Things (IoT)        ",
    },
    {
      name: "Blockchain Development",
    },
    {
      name: "Web and Mobile Development",
    },
    {
      name: "DevSecOps",
    },
    {
      name: "Predictive Analytics",
    },

    {
      name: "No-code Development",
    },
    {
      name: "Outsourcing Development",
    },
  ];
  return (
    <div className={styles.Services}>
      <h1>Services</h1>
      <div className={styles.cards}>
        {data.map((item) => (
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src="https://ocpl.tech/assets/web-a4d5590f.webp" />
            </div>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
