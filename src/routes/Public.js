import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import RedirectRoute from './Redirect';

const PublicRoutes = ({ component: Component, ...rest }) => {
    return rest.redirect ? (
        <RedirectRoute route={rest} />
    ) : (
        <Route {...rest} render={props => <Component {...props} />} />
    );
};

PublicRoutes.propTypes = {
    location: PropTypes.object
};

export default PublicRoutes;
