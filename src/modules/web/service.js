import * as API from "../../utils/api";
import Notify from "../../utils/notify";
import * as actions from "./store/actions";

export function getProducts(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "product" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.productList(res.data));
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getFeaturedProducts(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "product/featured/list" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.featuredProducts(res.data));
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getProductCategoryList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "category" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.setCategoryList(res.data));
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getProductCategoryFlatList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "category/flat" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.setCategoryFlatList(res.data));
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getSubCategoryList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `product/subcategory/${params.subCategoryName}` ;
            API.getReq(url,
                (res => {
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getBrandCategoryList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `product/brandcategory/${params.brandName}` ;
            API.getReq(url,
                (res => {
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}


export function getProductDetails(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `product/${params.name}` ;
            API.getReq(url,
                (res => {
                    resolve(res.data)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getCurrencyList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `currency` ;
            API.getReq(url,
                (res => {
                    dispatch(actions.setCurrencyList(res.data));
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getSuggestions(params) {
    return new Promise((resolve, reject) => {
            const url = `product/autosearch/${params.query}` ;
            API.getReq(url,
                (res => {
                    resolve(res.data);
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getProductSearch(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `product/search/${params.query}` ;
            API.getReq(url,
                (res => {
                    resolve(res.data);
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function constructionConsultantReq(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = `form/consultation` ;
            API.postReq(url, params,
                (res => {
                    resolve(res.data);
                }),
                (err => {
                    return reject(err);
                }));
        });
}




export function fetchUser() {
    return dispatch => 
        new Promise((resolve, reject) => {
            API.getReq("user/profile",
            (data => {
                dispatch(actions.authUser(data.user));
                return resolve(data.user);
            }),
            (err => {
                
                // dispatch(authActions.authPageLoading(false));
                return reject(err);
            }));
        });
}

 export function login(credentials) {
    return dispatch =>
        new Promise((resolve, reject) => {
            // dispatch(authActions.authPageLoading(true));
            API.postReq("auth/login", credentials,
                (data => {
                    dispatch(actions.login(data.token));
                    dispatch(actions.authUser(data.user));
                    Notify.success('You have successfully logged in')
                    return resolve();
                }),
                (err => {
                    // const statusCode = err.response.status;
                    // const data = {
                    //     error: null,
                    //     statusCode, err
                    // };

                    // if (statusCode === 422) {
                    // } else if (statusCode === 401) {
                    //     data.error = err.response.data.error.message;
                    // }
                    // dispatch(authActions.authPageLoading(false));
                    return reject(err);
                }));
        });
}


export function register(credentials) {
    return dispatch =>
        new Promise((resolve, reject) => {
            API.postReq("auth/register", credentials,
                (res => {
                    // dispatch(actions.login(data.accessToken));
                    Notify.success(res.message)
                    return resolve(res.message);
                }),
                (err => {
                    // const statusCode = err.response.status;
                    // const data = {
                    //     error: null,
                    //     statusCode
                    // };

                    // if (statusCode === 422) {
                    // } else if (statusCode === 401) {
                    //     data.error = err.response.data.message;
                    // }
                    Notify.error(err.message)
                
                    return reject(err);
                }))
        });
}

/**
 * logout user
 *
 * @returns {function(*)}
 */
export function logout() {
    return dispatch => 
        // new Promise((resolve, reject) => {
        //     API.deleteReq("auth/logout",
        //     (() => {
                dispatch(actions.logout());
        //     }),
        //     (err => {
        //         const statusCode = err.response.status;
        //         const data = {
        //             error: err.response.data.error.message,
        //             statusCode
        //         };
        //         return reject(data);
        //     }));
        // });

}
