import AboutDesc from "./AboutDesc";
import React, { useState } from "react";
import styles from "./About.module.css";

function AboutPage() {
  const [showDesc, setShowDesc] = useState(false);

  const handleClick = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div className={styles.About}>
      <button onClick={handleClick}>About</button>
      <h2>JOB APPLICATION TRACKER</h2>
      {showDesc && <AboutDesc />}
    </div>
  );
}

export default AboutPage;
