import React from "react";
import "./TopSection.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";
import AuthorizationForm from "./ Authorization/AuthorizationForm/AuthorizationForm";
import TopSectionDataProvider from "../../context/TopSectionData/TopSectionDataProvider";
import {Routes, Route, Navigate} from "react-router-dom";

function TopSection(props)  {
    const setSearchValue = props.setSearchValue;
    const setUser = props.setUser;
    const user = props.user;
    let routePath;
        if (user) {
            routePath = "/"
        }
        if (user) {
            routePath = "/"
        }
        if (!user) {
            routePath = "/auth";
        }

            return (
                <TopSectionDataProvider>
                    <header className="top-section">
                        <div className="top-section-background">
                            <div className="top-section-wrapper container">
                                <Routes>
                                    {user && (
                                            <Route
                                                path="/"
                                                element={
                                            <>
                                            <HeaderTop
                                                user={user}
                                                setUser={setUser}
                                            />
                                            <HeaderContent
                                                setSearchValue={setSearchValue}/>
                                            </>
                                            }
                                            />
                                    )}
                                    {!user && (
                                        <Route
                                            path="/auth"
                                            element={
                                        <>
                                        <HeaderTop
                                            user={user}
                                            setUser={setUser}
                                        />
                                            <AuthorizationForm user={user} setUser={setUser}/>
                                        </>}
                                        />
                                    )}
                                    <Route
                                        path="*"
                                        element={<Navigate to={routePath}/>}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </header>
                </TopSectionDataProvider>
            )
}

export default TopSection;
