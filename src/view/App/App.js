import React from "react";

import './App.css';
import '../../assets/fonts/Fonts.css';
import '../../assets/img/Sprite.svg';
import HomesSection from "../HomesSection/HomesSection";
import TopSection from "../TopSection/TopSection";
import AvailableSection from "../AvailableSection/Available";

function App() {

  return (
      <>
          <TopSection/>
          <main className="main-sections-wrapper">
              <AvailableSection/>
              <HomesSection />
          </main>
      </>
  );
}


export default App;
