import _ from "lodash";

export default class Transformer {
    /**
     * Method used to transform a fetched data
     *
     * @param param
     * @return {*}
     */
    static fetch(param) {
        if (param && Array.isArray(param)) {
            return Transformer.fetchCollection(param);
        } else if (param && typeof param === "object") {
            return Transformer.fetchObject(param);
        }
        return param;
    }

    /**
     * Method used to transform a fetched collection
     *
     * @param param
     * @return [Array]
     */
    static fetchCollection(param) {
        return param.map(item => Transformer.fetch(item));
    }

    /**
     * Method used to transform a fetched object
     *
     * @param param
     * @return {{}}
     */
    static fetchObject(param) {
        const data = {};

        _.forOwn(param, (value, key) => {
            data[_.camelCase(key)] = Transformer.fetch(value);
        });
        return data;
    }

    /**
     * Method used to transform a send data
     *
     * @param param
     * @return {*}
     */
    static send(param) {
        if (param && Array.isArray(param)) {
            return Transformer.sendCollection(param);
        } else if (param && typeof param === "object") {
            return Transformer.sendObject(param);
        }
        return param;
    }

    /**
     * Method used to transform a collection to be send
     *
     * @param param
     * @return [Array]
     */
    static sendCollection(param) {
        return param.map(item => Transformer.send(item));
    }

    /**
     * Method used to transform a object to be send
     *
     * @param param
     * @returns {{}}
     */
    static sendObject(param) {
        const data = {};

        _.forOwn(param, (value, key) => {
            data[_.snakeCase(key)] = Transformer.send(value);
        });
        return data;
    }

    /**
     * Method used to transform a form errors
     *
     * @param errors The fetched data
     * @param replace Boolean
     * @param searchStr String
     * @param replaceStr String
     * @returns {{}}
     */
    static resetValidationFields({
        errors,
        replace = false,
        searchStr = "",
        replaceStr = ""
    }) {
        const data = {};
        _.forOwn(errors, (value, key) => {
            let index = "";
            if (replace) {
                index = _.camelCase(key.replace(searchStr, replaceStr));
            } else {
                index = _.camelCase(key);
            }
            data[index] = _.head(value);
        });
        return data;
    }

    static numberWithCommas (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    static trimText(text, limit){
        return text && text.length > limit ? `${text.substring(0, limit)} ...` : text;
    }

    static removeHTMLTag (x){
        return x.toString().replace(/<\/?[^>]+(>|$)/g, '').replace(/&nbsp;/gi, '').replace(/&dash;/gi, '');
    }

    static formatCurrency(amount=0){
        // console.log('amount', amount)
        // return amount.toLocaleString('en-US',)
        return Number(amount).toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1,');
    }

    static chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    static validEmail = (email) => {
        let status = /\S+@\S+\.\S+/.test(email);
        return status;
    }

    static replaceSpaces = (string, replacer) => {
        return string
          .trim()
          .split(' ')
          .filter((word) => word.length > 0)
          .join(replacer);
    };

}
