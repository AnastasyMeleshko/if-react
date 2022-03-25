import React from "react";
import "./OtherInputsContainer.css";

function OtherInputsContainer() {

    return (
        <div className="left-container">
            <div className="form-destination-hidden form-item">
                <div className="form-img-loupe">
                    <svg className="form-loupe" id="loupe" viewBox="0 0 16 16">
                        <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629V10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"/>
                    </svg>
                </div>
                <input type="text" id="user-destination-hidden" className="form-input input-destination"
                       name="user-destination" required autoComplete="off"/>
                <label className="form-label label-destination-hidden label-destination"
                       htmlFor="user-destination-hidden">Your destination or hotel name</label>
            </div>
            <div className="form-dates">
                <div className="form-item check-inn">
                    <input type="text" className="form-input input-date" name="user-check-in-date"
                           id="form-user-check-in" required autoComplete="off"/>
                    <label className="form-label label-inn" htmlFor="form-user-check-in">Check-in date</label>
                </div>
                <div className="form-item check-out">
                    <input type="text" className="form-input input-date" name="user-check-out-date"
                           id="form-user-check-out" required autoComplete="off"/>
                    <label className="form-label label-out" htmlFor="form-user-check-out">Check-out date</label>
                </div>
            </div>
            <div className="main-numbers-wrap">
                <div className="form-numbers-wrap">
                    <div className="form-numbers">
                        <div className="form-adults form-numbers-item">
                            <input type="text" className="form-input input-adults numbers-input"
                                   name="user-adults" id="form-user-adults" autoComplete="off"/>
                            <label className="form-label label-adults" htmlFor="form-user-adults">Adults</label>
                            <p className="text-for-input shown">1</p>
                        </div>
                        <div className="form-children form-numbers-item">
                            <input type="text" className="form-input input-children numbers-input"
                                   name="user-children" id="form-user-children" autoComplete="off"/>
                            <label className="form-label label-children" htmlFor="form-user-children">Children</label>
                            <p className="text-for-input shown">0</p>
                        </div>
                        <div className="form-rooms form-numbers-item">
                            <input type="text" className="form-input input-rooms numbers-input"
                                   name="user-rooms" id="form-user-rooms" autoComplete="off"/>
                            <label className="form-label label-rooms" htmlFor="form-user-rooms">Rooms</label>
                            <p className="text-for-input shown">1</p>
                        </div>
                    </div>
                    <div className="form-numbers-big-screen">
                        <div className="form-input-bg form-input-adults">
                                    <span className="form-label-bg form-label-adults">
                                        1 Adults
                                    </span>
                        </div>
                        <div className="first-line">
                        </div>
                        <div className="form-input-bg form-input-children">
                                    <span className="form-label-bg form-label-children">
                                        0 Children
                                    </span>
                        </div>
                        <div className="second-line">
                        </div>
                        <div className="form-input-bg form-input-rooms">
                                    <span className="form-label-bg form-label-rooms">
                                        1 Rooms
                                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-button-wrap">
                <button className="search-button" name="Search" type="submit">
                    Search
                </button>
            </div>
        </div>
    );
}


export default OtherInputsContainer;
