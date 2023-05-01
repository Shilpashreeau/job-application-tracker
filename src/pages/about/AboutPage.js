import AboutDesc from "./AboutDesc";
import React, { useState } from "react";
import styles from "./About.module.css";

function AboutPage() {
  const [showDesc, setShowDesc] = useState(false);
// const [closeButton,setCloseButton]=useState(false);
  const handleClick1 = () => {
    setShowDesc(true);
    // setCloseButton(true);
  };
  const handleClick2 = () => {
    setShowDesc(false);
    // setCloseButton(true);
  };
  // const handleClickClose=()=>{
  // setShowDesc(false);
  // };
  // const handleCloseBtn=()=>{
   
    
  //   };

  return (
    <div className={styles.About}>
      <button onClick={handleClick1}>About</button>
      <h2>JOB APPLICATION TRACKER</h2>
      {showDesc && <AboutDesc /> }
      {handleClick2}
      {/* <button  onClick={handleClickClose}>close</button> */}
    </div>
  )
}

export default AboutPage;
