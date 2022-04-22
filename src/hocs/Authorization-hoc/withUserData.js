import React from "react";

const getUser = () => ({
    email: "12345@mail.ru",
    password: "12345",
});

export const withUserData = (Component) => (props) => {
    const user = getUser();
    return !!user && <Component {...props} user={user}/>
}
