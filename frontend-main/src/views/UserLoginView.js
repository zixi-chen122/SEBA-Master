// import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import LoginComponent from "../components/UserLoginComponent";
import { login } from "../slices/userSlice";
/**
 * For user login
 * @param {props} props
 */
function UserLoginView(props) {
// const user={username:'', password :''}
const user = useSelector((state) => state.user);


    // const user = useSelector((state) => state.user);
    // useEffect(() => {
    //     if (user.user) {
    //         props.history.push("/");
    //     }
    // }, [user, props.history]);
    const onLogin = (username, password) => {
        console.log(username)
        console.log(login())
        console.log(props)
        props.dispatch(login({username, password}));
        props.history.goBack()
    };

    // const onCancel = () => {
    //     props.history.push("/");
    // };

    // const onSignUp = () => {
    //     props.history.push("/register");
    // };

    return (
        <LoginComponent
            user={user}
            onSignUp={() => props.history.push("/register")}
            onCancel={() => props.history.goBack()}
            onLogin={onLogin}
        />
        // <LoginComponent
        //     user={user}
        //     onCancel={onCancel}
        //     onLogin={onLogin}
        //     onSignUp={onSignUp}
        // />
    );
}

export default connect()(withRouter(UserLoginView));
// export default withRouter(UserLoginView);
