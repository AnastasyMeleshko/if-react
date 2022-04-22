import React from "react";
import "./AuthorizationForm.css";
import FormInput from "../../HeaderContent/HeaderForm/commonComponents/FormInput/FormInput";
import FormLabel from "../../HeaderContent/HeaderForm/commonComponents/FormLabel/FormLabel";

const AuthorizationForm = () => {

    const funcForChange = () => {
        console.log(1)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
    }

    return (
        <form className="authorization-form" onSubmit={handleSubmit}>
            <p className="auth-form-title">Sign&nbsp;in</p>
            <div className="user-email-wrap">
                <FormLabel className="label-user-email auth-label" htmlFor="user-email" labelText="Email address"/>
                <FormInput  onChange={funcForChange} value={name} type="text" id="user-email" className="user-email auth-input" name="user-email" required="required"/>
            </div>
            <div className="user-password-wrap">
                <FormLabel className="label-user-password auth-label" htmlFor="user-password" labelText="Password"/>
                <FormInput  onChange={funcForChange} value={name} type="text" id="user-password" className="user-password auth-input" name="user-password" required="required"/>
            </div>
            <button type="submit" className="auth-button">Sign&nbsp;in</button>
        </form>
    )
}

export default AuthorizationForm;
