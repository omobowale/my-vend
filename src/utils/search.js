import Transformer from './Transformer';

export const searchValue = (value) => {
    const query = Transformer.replaceSpaces(value, '+');
    if (query.length > 0) {
        window.location = `/product-search?query=${query}`;
    }
};
