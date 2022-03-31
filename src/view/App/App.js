import React, { useState } from "react";

import './App.css';
import '../../assets/fonts/Fonts.css';
import '../../assets/img/Sprite.svg';
import HomesSection from "../HomesSection/HomesSection";
import TopSection from "../TopSection/TopSection";
import AvailableSection from "../AvailableSection/Available";



function App() {

  const [searchValue, setSearchValue] = useState("");

  return (
      <>
          <TopSection setSearchValue={setSearchValue}/>
          <main className="main-sections-wrapper">
              <AvailableSection searchValue={searchValue}/>
              <HomesSection />
          </main>
      </>
  );
}


export default App;
