import * as actions from '../../store/actions';

import { compare } from '../../../../utils/compare';
import { getProductDetails } from '../../service';

export const handleCompare = () => {
    return async (dispatch) => {
        //get all comparison sellections from storage
        const compareSelection = compare.get();

        const compareProducts = await Promise.all(
            compareSelection.map((item) => dispatch(getProductDetails({name: item})))
        );

        //Extract the data needed for comparison
        const compareItems = compareProducts
            .map((product) => extractCompareProduct(product))
            // .reduce(groupByCategory, {});

        //Extract the data needed for comparison header
        const compareHeader = compareItems
        .map((item) => extractCompareHeader(item))
        // .reduce(groupByCategory, {});

        dispatch(actions.setCompareHeader(compareHeader));
        dispatch(actions.setCompareBody(compareItems));
    };
}

export function setComparableReq(val) {
    return (dispatch) => dispatch(actions.setCompare(val));
}


const groupByCategory = ( r, item) => {
    let cat = item.subcategory;
    r[cat.slug] = r[cat.slug] || [];
    r[cat.slug].push(item);
    return r;
}

const extractCompareProduct = (product) => {
    const NONE_SELECTED = 'None Selected';
  
    return {

        name: product.name,
        slug: product.slug,
        rating: product.rating || 0,
        reviews: product.reviews || 0,
        subcategory: product.subcategory,
        subsubcategory: product.subsubcategory,
        image: product.image && product.image.length > 0 ? product.image[0] : null,
        desc: product.desc,
        price: product.price,
        currency: product.currency,
        currencyId: product.currency && product.currency.id,
        brand: product.brand && product.brand.name,
        type: product.type,
        location: product.location,
        desc: product.desc,
        weight: product.weight,
        tag: product.tag,
        width: product.width,
        length: product.length,
        quantity: product.quantity,
    };
};
  
const extractCompareHeader = (product) => {
    return {
        name: product.name,
        slug: product.slug,
        rating: product.rating,
        reviews: product.reviews,
        subcategory: product.subcategory,
        subsubcategory: product.subsubcategory,
        image: product.image,
        price: product.price,
        currency: product.currency,
        currencyId: product.currencyId,
    };
};