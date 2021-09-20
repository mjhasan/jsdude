import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component }, ...rest) => {
    const { user } = useAuth();
    return (
        user ? (
            <>
                <Route {...rest}>
                    {
                        (props) => <Component {...props} />
                    }
                </Route>
            </>
        ) : (
            <>
                <Redirect to="/login" />
            </>
        )
    );
};

export default PrivateRoute;