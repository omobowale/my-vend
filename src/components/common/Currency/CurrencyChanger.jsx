import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectedCurrency as setCurrency } from '../../../modules/web/store/actions';
import { getConversionRates } from '../../../modules/web/service';

import './CurrencyChanger.scss';
import { saveCurrencyToLocal } from '../../../utils/currency';
import { MAJOR_CURRENCIES_ID } from '../../../constants/constants';

function CurrencyChanger({ currencies = [], selectedCurrency, dispatch }) {
  const changeCurrency = (curr) => {
    dispatch(setCurrency(curr));
    dispatch(getConversionRates(curr.id));
    saveCurrencyToLocal(curr);
  };

  const sortedCurrency = useMemo(() => {
    const currArr = [...currencies];

    const majorCurrencies = currArr.filter((curr) =>
      MAJOR_CURRENCIES_ID.includes(curr.id)
    );

    const minorCurrencies = currArr
      .filter((curr) => !MAJOR_CURRENCIES_ID.includes(curr.id))
      .sort((a, b) => a.short.localeCompare(b.short));

    return [...majorCurrencies, ...minorCurrencies];
  }, [currencies]);

  return (
    <div className="currency-converter">
      <ul>
        <li className="currency active">
          <img src={selectedCurrency.flag_url} alt={selectedCurrency.short} />

          {selectedCurrency.short}
        </li>
        {sortedCurrency.map((curr) => {
          if (curr.id !== selectedCurrency.id) {
            return (
              <li key={curr.id}>
                <a
                  href="#0"
                  className="currency"
                  onClick={() => changeCurrency(curr)}
                >
                  <img src={curr.flag_url} alt={curr.short} />
                  {curr.short}
                </a>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

CurrencyChanger.propTypes = {
  currencies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currencies: state.web.dependencies.currencies,
    selectedCurrency: state.web.selectedCurrency,
  };
};

export default connect(mapStateToProps)(CurrencyChanger);
