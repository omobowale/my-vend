import * as actionTypes from './actionTypes';

import * as stores from './stores';

const initialState = {
    products: [],
    featuredProducts: [],
    currencies : [],
    categories : [],
    showAuth: false,
    authPage: 'login',
    isAuthenticated: false,
    intendedRoute: {route: '', params: {}},
    authCognitoUser: {email_verified: false},
    authUser: {},
    authToken: '',
};

const reducer = (state = initialState, { type, payload = null }) => {
    switch (type) {
        case actionTypes.PRODUCT_LIST :
            return stores.storeProductList(state, payload);
        case actionTypes.FEATURED_PRODUCTS :
            return stores.storeFeaturedProducts(state, payload);
        case actionTypes.CURRENCY_LIST :
            return stores.setCurrencyList(state, payload);
        case actionTypes.CATEGORY_LIST :
            return stores.setCategoryList(state, payload);
        case actionTypes.AUTH_USER :
            return stores.setAuthUser(state, payload);
        case actionTypes.AUTH_TOKEN :
            return stores.setAuthToken(state, payload);
        case actionTypes.AUTH_LOGIN :
            return stores.login(state, payload);
        case actionTypes.AUTH_LOGOUT :
            return stores.logout(state, payload);
        case actionTypes.SHOW_AUTH_PAGE :
            return stores.setAuthPage(state, payload);
        case actionTypes.SET_INTENDED_ROUTE :
            return stores.setIntendedRoute(state, payload);
        
        default:
            return state;
    }
};


export default reducer;