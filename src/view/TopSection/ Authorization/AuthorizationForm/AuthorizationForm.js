import React, { useState } from "react";
import "./AuthorizationForm.css";
import FormInput from "../../HeaderContent/HeaderForm/commonComponents/FormInput/FormInput";
import FormLabel from "../../HeaderContent/HeaderForm/commonComponents/FormLabel/FormLabel";
import {withUserData} from "../../../../hocs/Authorization-hoc/withUserData";
import {withRequestedData} from "../../../../hocs/Authorization-hoc/withRequestedData";
import { useNavigate } from "react-router-dom";

const AuthorizationForm = (props) => {
    const user = props.user;
    const setUser = props.setUser;
    const [values, setValue] = useState(null);

    const handleChange = (e) => {
        setValue((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };

    const navigate = useNavigate();
    const handleSignInSubmit = (e) => {
        e.preventDefault();
        setUser(values);
        navigate("/");
        console.log(user);
    }

        return (
            <form className="authorization-form" onSubmit={handleSignInSubmit}>
                <p className="auth-form-title">Sign&nbsp;in</p>
                <div className="user-email-wrap">
                    <FormLabel className="label-user-email auth-label" htmlFor="user-email" labelText="Email address"/>
                    <FormInput  onChange={handleChange} value={user.email} name="email" type="email" id="user-email" className="user-email auth-input"  required="required"/>
                </div>
                <div className="user-password-wrap">
                    <FormLabel className="label-user-password auth-label" htmlFor="user-password" labelText="Password"/>
                    <FormInput  onChange={handleChange} value={user.password} name="password" type="password" id="user-password" className="user-password auth-input"  required="required"/>
                </div>
                <button onSubmit={handleSignInSubmit} type="submit" className="auth-button">Sign&nbsp;in</button>
            </form>
        )
}

    const pipe = (...funcs) => (target) => {
        return funcs.reduce((acc, f) => {
            return f(acc);
        }, target);
    };

// !!! alternative pipe with FOR cycle
//     const pipe = (...funcs) => (target) => {
//        let acc = target;
//        for (let i=0; i < funcs.length; i++) {
//            acc = funcs[i](acc);
//        }
//        return acc;
//     };

    export default
        pipe(
            withRequestedData,
            withUserData,
        )(AuthorizationForm);


