import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectRoute = (props) => {
    console.log('redirect', props);
    const params = props.route.computedMatch.params;
    let to = props.route.to;
    for (let key in params) {
        console.log(key);
        to = to.replace(`:${key}`, params[key]);
    }

    return <Redirect to={to} from={props.route.path} />;
};

export default RedirectRoute;
