import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Transformer from '../../../utils/Transformer';

function Price({
    currencies,
    defaultCurrency,
    price,
    decimal = true,
    noSymbol,
    currency,
    seriousCurrency,
    className,
    serious,
    priceCurrencyId = 1,
    conversions,
    noConversion = false,
}) {
    const buyingCurrency = serious ? seriousCurrency : currency;
    const conversionRate = {};

    const calculateCurrency = () => {
        const convertedPrice = noConversion
        ? price
        : price * conversionRate.net_rate;

        return decimal ? convertedPrice.toFixed(2) : Math.ceil(convertedPrice);
    };

    const getCurrency = (currency) => {
        if(currency?.symbol){
            return currency?.symbol;
        }

        const cur = currencies.find(cur => cur.id == currency) || defaultCurrency;
        return cur ? cur.symbol : '';
    }

    return (
        <>
            <span className={`currency-price ${className}`}>{`${
            !noSymbol ? getCurrency(buyingCurrency) : ''
            }${Transformer.numberWithCommas(calculateCurrency().split('.')[0])}`}</span>

            <span className={`currency-price-sub`}>.{calculateCurrency().split('.')[1]}</span>
        </>
    );
}

Price.propTypes = {
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    decimal: PropTypes.bool,
    // serious: PropTypes.bool,
    // conversions: PropTypes.object.isRequired,
    priceCurrencyId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // noConversion: PropTypes.bool,
};

Price.defaultProps = {
    decimal: true,
    serious: false,
    price: 0,
    priceCurrencyId: 1,
    noConversion: false,
    currency: {}
};

const mapStateToProps = (state) => {
    return {

        currencies: state.web.currencies,
        defaultCurrency: state.web.currencies.length > 0 ? state.web.currencies.find(cur => cur.short == 'NGN') : {},
        // currency: state.web.selectedCurrency,
        // seriousCurrency: state.buyer.currency,
        // conversions: state.web.netConversions.othersToCurrency,
    };
};

export default connect(mapStateToProps)(Price);
