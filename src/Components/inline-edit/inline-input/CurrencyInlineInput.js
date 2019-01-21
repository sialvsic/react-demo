import React, { Component } from 'react';
import { parseCurrencyToNumber } from '../../../utils';
import { normaliseMaxNumber, normaliseInRange, formatCurrency } from '../../../utils';
import BaseInlineInput from './BaseInlineInput';

const MAX_NUMBER = 99999999;
const MIN_NUMBER = 0;

const withCurrency = (ComposedComponent) => {

  return class extends Component {

    onChange = (value, maxNumber) => {
      const parseValue = parseCurrencyToNumber(value);
      const restrictMaxNumber = normaliseMaxNumber(maxNumber);
      const newValue = restrictMaxNumber(parseInt(parseValue)) || 0;

      this.props.onChange && this.props.onChange(newValue);
    };

    onBlur = (value, minNumber, maxNumber) => {
      const parseValue = parseCurrencyToNumber(value);
      const newValue = parseInt(normaliseInRange(parseValue, maxNumber, minNumber));

      this.props.onBlur && this.props.onBlur(newValue);
    };

    render() {
      const { minNumber = MIN_NUMBER, maxNumber = MAX_NUMBER, ...otherProps } = this.props;

      return (
        <ComposedComponent
          { ...otherProps }
          valueFormatter={ formatCurrency }
          type={ 'tel' }
          onBlur={ (value) => {
            this.onBlur(value, minNumber, maxNumber);
          } }
          onChange={ (value) => {
            this.onChange(value, maxNumber);
          } }
        />
      );
    }
  };
};

export default withCurrency(BaseInlineInput);
