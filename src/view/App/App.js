import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import 'antd/dist/antd.css';

import './App.css';
import '../../assets/fonts/Fonts.css';
import '../../assets/img/Sprite.svg';
import HomesSection from "../HomesSection/HomesSection";
import TopSection from "../TopSection/TopSection";
import AvailableSection from "../AvailableSection/Available";
import HotelCard from "../AvailableSection/HotelCard/HotelCard";
import Footer from "../Footer/Footer";


function App() {

  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);

  return (
      <Router>
          <>
              <TopSection setSearchValue={setSearchValue} searchValue={searchValue} setUser={setUser} user={user}/>
              <main className="main-sections-wrapper">
                  {user ? (
                      <Routes>
                          <Route path="/hotels" element={<AvailableSection searchValue={searchValue}/>}/>
                          <Route path="/hotels/:id" element={<HotelCard/>}/>
                          <Route path="/" element={<HomesSection/>}/>
                      </Routes>
                  ) : ""
                  }
              </main>
              <Footer/>
          </>
      </Router>
  );
}


export default App;
