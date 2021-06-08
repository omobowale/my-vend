import * as API from "../../utils/api";
import * as actions from "./store/actions";

export function getProducts(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "product" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.productList(res));
                    resolve(res)
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
                    dispatch(actions.featuredProducts(res));
                    resolve(res)
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
                    dispatch(actions.setCategoryList(res));
                    resolve(res)
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
                    dispatch(actions.setCategoryFlatList(res));
                    resolve(res)
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
                    resolve(res)
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
                    resolve(res)
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
                    resolve(res)
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
                    dispatch(actions.setCurrencyList(res));
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
                    resolve(res);
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
                    resolve(res);
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
                    resolve(res);
                }),
                (err => {
                    return reject(err);
                }));
        });
}
