import HTTP from "../../../utils/Http";

export function storeProductList(state, payload) {
    return Object.assign({}, state, { 
        products : payload,
    });
}

export function storeFeaturedProducts(state, payload) {
    return Object.assign({}, state, { 
        featuredProducts : payload,
    });
}

export function setCurrencyList(state, payload) {
    return Object.assign({}, state, { 
        currencies : payload,
    });
}

export function setCategoryList(state, payload) {
    return Object.assign({}, state, { 
        categories : payload,
    });
}

export function setCategoryFlatList(state, payload) {
    return Object.assign({}, state, { 
        categoryList : payload,
    });
}

export function setAuthUser(state, payload) {
    return Object.assign({}, state, { 
        user : payload,
    });
}

export function setAuthToken(state, payload) {
    return Object.assign({}, state, { 
        authToken : payload,
    });
}

export function login(state, payload) {
    localStorage.setItem("access_token", payload);
    HTTP.defaults.headers.common["Authorization"] = `${payload}`;
    return {
        ...state,
        isAuthenticated: true,
        authToken: payload,
    };
}

export function logout(state) {
    localStorage.removeItem("access_token");
    HTTP.defaults.headers.common["Authorization"] = ``;

    return {
        ...state,
        isAuthenticated: false,
        authToken: null,
        user: {}
    };
}


export function checkAuth(state) {
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem("access_token")
    });

    if (state.isAuthenticated) {
        HTTP.defaults.headers.common[
            "Authorization"
        ] = `${localStorage.getItem("access_token")}`;
    }

    return state;
}

export function setAuthPage(state, payload) {
    return {
        ...state,
        showAuth: payload.showAuth,
        authPage: payload.authPage || 'login'
    };
}

export function setIntendedRoute(state, payload) {
    return {
        ...state,
        intendedRoute: payload,
    };
}