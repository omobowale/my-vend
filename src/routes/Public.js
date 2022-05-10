import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import RedirectRoute from './Redirect';
import LivevendLayout from "../components/layout/LivevendLayout";

const PublicRoutes = ({ component: Component, ...rest }) => {
    return rest.redirect ? (
        <RedirectRoute route={rest} />
    ) : (
         rest.layout === false ? <Route {...rest} render={props => <Component {...props} />} /> :
            <LivevendLayout>
                <Route {...rest} render={props => <Component {...props} />} />
            </LivevendLayout>
        
    );
};

PublicRoutes.propTypes = {
    location: PropTypes.object
};

export default PublicRoutes;
