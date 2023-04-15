import React from "react";
import styles from "./Contact.module.css";
import Frame from "./Frame";

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <h1>Contact US</h1>
      <div className={styles.content}>
        <form className={styles.left}>
          <input
            name="name"
            type="text"
            className={styles.feedback_input}
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className={styles.feedback_input}
            placeholder="Email"
          />
          <textarea
            name="text"
            className={styles.feedback_input}
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
        <div className={styles.right}>
          <Frame />
        </div>
      </div>
    </div>
  );
}
