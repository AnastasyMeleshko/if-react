import React from "react";

import './App.css';
import '../../assets/fonts/Fonts.css';
import '../../assets/img/Sprite.svg';
import HomesSection from "../HomesSection/HomesSection";
import TopSection from "../TopSection/TopSection";

function App() {
  return (
      <>
          <TopSection/>
          <main className="main-sections-wrapper">
              <HomesSection />
          </main>
      </>
  );
}


export default App;
