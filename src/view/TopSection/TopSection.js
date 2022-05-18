import React from "react";
import "./TopSection.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";
import AuthorizationForm from "./ Authorization/AuthorizationForm/AuthorizationForm";
import TopSectionDataProvider from "../../context/TopSectionData/TopSectionDataProvider";

function TopSection(props)  {
    const setSearchValue = props.setSearchValue;
    const setUser = props.setUser;
    const user = props.user;
    const handleThemeClick = props.handleThemeClick;

    return (
        <TopSectionDataProvider>
            <header className="top-section">
                <div className="top-section-background">
                    <div className="top-section-wrapper container">
                        {user && (
                            <>
                            <HeaderTop
                                user={user}
                                setUser={setUser}
                                handleThemeClick={handleThemeClick}
                            />
                            <HeaderContent setSearchValue={setSearchValue}/>
                            </>

                        )}
                        {!user && (
                            <>
                            <HeaderTop
                                user={user}
                                setUser={setUser}
                                handleThemeClick={handleThemeClick}
                            />
                            <AuthorizationForm user={user} setUser={setUser}/>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </TopSectionDataProvider>
    )
}

export default TopSection;
