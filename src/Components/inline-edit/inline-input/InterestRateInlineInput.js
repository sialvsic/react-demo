import React, { Component } from 'react';
import DecimalNumberInlineInput from './DecimalNumberInlineInput';

const MAX_INTEREST_RATE = 25;
const MIN_INTEREST_RATE = 0;
const DECIMAL_LENGTH = 2;

class InterestRateInlineInput extends Component {

  render() {
    const {
      decimalLength = DECIMAL_LENGTH, maxNumber = MAX_INTEREST_RATE, minNumber = MIN_INTEREST_RATE,
      ...otherProps
    } = this.props;

    return (
      <DecimalNumberInlineInput
        { ...otherProps }
        symbol={ '%' }
        decimalLength={ decimalLength }
        maxNumber={ maxNumber }
        minNumber={ minNumber }
      />
    );
  }
}

export default InterestRateInlineInput;
