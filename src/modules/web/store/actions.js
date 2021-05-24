import * as actionTypes from './actionTypes';

export const productList = (payload) => {
    return {
        type: actionTypes.PRODUCT_LIST,
        payload,
    };
};

export const featuredProducts = (payload) => {
    return {
        type: actionTypes.FEATURED_PRODUCTS,
        payload,
    };
};

export const setCurrencyList = (payload) => {
    return {
        type: actionTypes.CURRENCY_LIST,
        payload,
    };
};

export const setCategoryList = (payload) => {
    return {
        type: actionTypes.CATEGORY_LIST,
        payload,
    };
};

export const login = payload => {
    return {
        type: actionTypes.AUTH_LOGIN,
        payload
    };
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
}

export const setAuthToken = payload => {
    return {
        type: actionTypes.AUTH_TOKEN,
        payload
    }
}

export const setAuthPage = payload => {
    return {
        type: actionTypes.SHOW_AUTH_PAGE,
        payload
    }
}

export const setIntendedRoute = payload => {
    return {
        type: actionTypes.SET_INTENDED_ROUTE,
        payload
    }
}
