import Http from "./Http";
import Transformer from "./Transformer";

function transformRequest(parms) {
    return Transformer.send(parms);
}

function transformResponse(params) {
    return Transformer.fetch(params);
}

export const APP_URL = 'localhost';

export const postReq = (url, params, success, failed) => {
    Http.post(url, transformRequest(params))
        .then(res => {
            return success(transformResponse(res.data.data));
        })
        .catch(err => {

            const response = err.response;
            if(typeof response != "undefined"){
                const statusCode = response.status;
                const data = {
                    error: null,
                    statusCode
                };

                if (statusCode === 422) {
                    const resetErrors = {
                        errors: response.data.error.message,
                        replace: false,
                        searchStr: "",
                        replaceStr: ""
                    };
                    data.error = Transformer.resetValidationFields(
                        resetErrors
                    );
                    // Notify.error("Invalid input");
                } else if (statusCode === 401) {
                    data.error = response.data.error ? response.data.error.message : response.statusText;
                    // Notify.error(data.error);
                } else {
                    data.error = response.data.error ? response.data.error.message : response.statusText;
                    // Notify.error(data.error);
                }

                return failed(data);
            }
            return failed({})
        });
}

export const patchReq = (url, params, success, failed) => {
    Http.patch(url, transformRequest(params))
        .then(res => {
            return success(transformResponse(res.data.data));
        })
        .catch(err => {

            const response = err.response;
            if(typeof response != "undefined"){
                const statusCode = response.status;
                const data = {
                    error: null,
                    statusCode
                };

                if (statusCode === 422) {
                    const resetErrors = {
                        errors: response.data.error.message,
                        replace: false,
                        searchStr: "",
                        replaceStr: ""
                    };
                    data.error = Transformer.resetValidationFields(
                        resetErrors
                    );
                    // Notify.error("Invalid input");

                } else if (statusCode === 401) {
                    data.error = response.data.error ? response.data.error.message : response.statusText;
                    // Notify.error(data.error);
                } else {
                    data.error = response.data.error ? response.data.error.message : response.statusText;
                    // Notify.error(data.error);
                }

                return failed(data);
            }
            // Notify.error('oops!');
            return failed({});
        });
    
}

export const deleteReq = (url, success, failed) => {     
    Http.delete(url)
        .then(res => {
            if(res.data.data.msg){
                // Notify.success(res.data.data.msg);
            }
            return success(transformResponse(res.data.data));
        })
        .catch(err => {
            // TODO: handle err
            const response = err.response;
            if(typeof response != "undefined"){
                const statusCode = response.status;
                const data = {
                    error: response.data.error ? response.data.error.message : response.statusText,
                    statusCode
                };
                // Notify.error(data.error);
                return failed(data);
            }
            // Notify.error('oops!');
            return failed({});
        });

}

export const getReq = (url, success, failed) => {

    Http.get(url)
        .then(res => {
            if(res.data.data.msg){
                // Notify.success(res.data.data.msg);
            }
            return success(transformResponse(res.data.data));
        })
        .catch(err => {
            const response = err.response;
            if(typeof response != "undefined"){
                const statusCode = response.status;
                const data = {
                    error: response.data.error ? response.data.error.message : response.statusText,
                    statusCode
                };
                // Notify.error(data.error);
                return failed(data);
            }
            // Notify.error('oops!');
            // alert(response)
            return failed({});
        
        });
    
}


