import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./AuthorizationForm.css";
import FormInput from "../../HeaderContent/HeaderForm/commonComponents/FormInput/FormInput";
import FormLabel from "../../HeaderContent/HeaderForm/commonComponents/FormLabel/FormLabel";
import {ACTION_LOGIN} from "../../../../ducks/user/actions";

const AuthorizationForm = (props) => {
    const setUser = props.setUser;
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [error, setError] = useState(false);

    const handleChangeEmail = (e) => {
        setEmailValue(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const userEmail = useSelector(state => state.user.email);
    const userPassword = useSelector(state => state.user.password);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if (emailValue === userEmail && passwordValue === userPassword) {
            dispatch(ACTION_LOGIN());
            setUser(true);
            navigate("/");
        } else {
            setError(true);
            console.log(error)
        }
    }

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        handleAuth();
    }

        return (
            <>
                <form className="authorization-form" onSubmit={handleSignInSubmit}>
                    <p className="auth-form-title">Sign&nbsp;in</p>
                    <div className="user-email-wrap">
                        <FormLabel className="label-user-email auth-label" htmlFor="user-email" labelText="Email address"/>
                        {(error && emailValue !== userEmail) ?
                        <FormInput  onChange={handleChangeEmail} name="email" type="email" id="user-email" className="user-email auth-input auth-error-input"  required="required"/>
                        :
                        <FormInput  onChange={handleChangeEmail} name="email" type="email" id="user-email" className="user-email auth-input"  required="required"/>
                        }
                    </div>
                    <div className="user-password-wrap">
                        <FormLabel className="label-user-password auth-label" htmlFor="user-password" labelText="Password"/>
                        {(error && passwordValue !== userPassword) ?
                        <FormInput  onChange={handleChangePassword} name="password" type="password" id="user-password" className="user-password auth-input auth-error-input"  required="required"/>
                        :
                        <FormInput  onChange={handleChangePassword} name="password" type="password" id="user-password" className="user-password auth-input"  required="required"/>
                        }
                        </div>
                    <button onSubmit={handleSignInSubmit} type="submit" className="auth-button">Sign&nbsp;in</button>
                    {error && <p className="auth-error">Please check your email and password!</p>}
                </form>
            </>
        )
}

export default AuthorizationForm;

    // const pipe = (...funcs) => (target) => {
    //     return funcs.reduce((acc, f) => {
    //         return f(acc);
    //     }, target);
    // };

// !!! alternative pipe with FOR cycle
//     const pipe = (...funcs) => (target) => {
//        let acc = target;
//        for (let i=0; i < funcs.length; i++) {
//            acc = funcs[i](acc);
//        }
//        return acc;
//     };


        // pipe(
        //     withRequestedData,
        //     withUserData,
        // )(AuthorizationForm);


