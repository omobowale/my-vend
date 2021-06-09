import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Layout from '../components/layout/';
import RedirectRoute from './Redirect';

const PrivateRoute = ({
    module: Module,
    component: Component,
    isAuthenticated,
    user,
    ...rest
}) => {
    return rest.redirect ? (
        <RedirectRoute route={rest} />
    ) : (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    rest.auth ? (
                        // <Layout>
                            <Component {...props} />
                        // </Layout>
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        isAuthenticated: store.auth.isAuthenticated,
        user: store.user,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
