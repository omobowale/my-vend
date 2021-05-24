import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Transformer from '../../../utils/Transformer';

function Price({
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
  // const conversionRate = conversions[buyingCurrency.id][priceCurrencyId];
  const conversionRate = {};

  const calculateCurrency = () => {
    const convertedPrice = noConversion
      ? price
      : price * conversionRate.net_rate;

    // console.log(buyingCurrency.id, priceCurrencyId, conversionRate.net_rate);
console.log('converted',convertedPrice)
    return decimal ? convertedPrice.toFixed(2) : Math.ceil(convertedPrice);
  };

  return (
    <span className={`currency-price ${className}`}>{`${
      !noSymbol ? buyingCurrency?.symbol : ''
    }${Transformer.numberWithCommas(calculateCurrency())}`}</span>
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
  priceCurrencyId: 1,
  noConversion: false,
};

const mapStateToProps = (state) => {
  return {
    // currency: state.web.selectedCurrency,
    // seriousCurrency: state.buyer.currency,
    // conversions: state.web.netConversions.othersToCurrency,
  };
};

export default connect(mapStateToProps)(Price);
