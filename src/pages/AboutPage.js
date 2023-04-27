import AboutDesc from "./AboutDesc";
import React, { useState } from "react";
function AboutPage() {
  const [showDesc, setShowDesc] = useState(false);

  const handleClick = () => {
    setShowDesc(true);
  };

  return (
    <div>
      <button onClick={handleClick}>About</button>
      {showDesc && <AboutDesc />}
    </div>
  );
}

export default AboutPage;
