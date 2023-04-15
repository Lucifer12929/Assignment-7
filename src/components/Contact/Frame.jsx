import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Contact.module.css";
export default function Frame() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    });
  }, [controls]);
  return (
    <motion.div animate={controls} className={styles.wrapper}>
      <div className={styles.container}>
        <iframe
          title="background-3d"
          src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
          frameBorder={0}
          height="100%"
          className={styles.iframe}
        ></iframe>
        {/* <div className={styles.hideLogo} /> */}
      </div>
    </motion.div>
  );
}
