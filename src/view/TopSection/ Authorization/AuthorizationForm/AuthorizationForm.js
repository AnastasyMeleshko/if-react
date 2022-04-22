import React, {useState} from "react";
import "./AuthorizationForm.css";
import FormInput from "../../HeaderContent/HeaderForm/commonComponents/FormInput/FormInput";
import FormLabel from "../../HeaderContent/HeaderForm/commonComponents/FormLabel/FormLabel";
import {withUserData} from "../../../../hocs/Authorization-hoc/withUserData";
import {withRequestedData} from "../../../../hocs/Authorization-hoc/withRequestedData";

const AuthorizationForm = (
    {user = {
        email: "",
        password: "",
    },
    data = [],
    }) => {
    const [values, setValue] = useState(user);


    const handleChange = (e) => {
        setValue((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(values);
        console.log(data.results);
    }

    return (
        <form className="authorization-form" onSubmit={handleSubmit}>
            <p className="auth-form-title">Sign&nbsp;in</p>
            <div className="user-email-wrap">
                <FormLabel className="label-user-email auth-label" htmlFor="user-email" labelText="Email address"/>
                <FormInput  onChange={handleChange} value={values.email} name="email" type="email" id="user-email" className="user-email auth-input"  required="required"/>
            </div>
            <div className="user-password-wrap">
                <FormLabel className="label-user-password auth-label" htmlFor="user-password" labelText="Password"/>
                <FormInput  onChange={handleChange} value={values.password} name="password" type="password" id="user-password" className="user-password auth-input"  required="required"/>
            </div>
            <button type="submit" className="auth-button">Sign&nbsp;in</button>
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


