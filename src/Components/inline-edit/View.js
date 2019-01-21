import React, { Component } from 'react';
import BaseInlineInput from './inline-input/BaseInlineInput';
import CurrencyInlineInput from './inline-input/CurrencyInlineInput';
import DecimalNumberInlineInput from './inline-input/DecimalNumberInlineInput';
import IntegerNumberInlineInput from './inline-input/IntegerNumberInlineInput';
import InterestRateInlineInput from './inline-input/InterestRateInlineInput';
import InlineSelect from './inline-select/';

import './style.scss';

const inlineSelectOptions = [
  { value: 'small', text: 'SMALL' },
  { value: 'medium', text: 'MEDIUM' },
  { value: 'large', text: 'LARGE' },
];

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseText: 'sialvsic',
      inlineCurrencyNumber: 123456,
      inlineIntegerNumber: 2200,
      inlineDecimalText: '6.67',
      inlineInterestRate: '3.67',
      inlineSelectValue: '3.67',
    };
  }

  render() {
    return (
      <div>
        <h3>inline edit</h3>
        <section> inline input</section>
        <label htmlFor="base-input">BaseInlineInput</label>
        <div className="component">
          <BaseInlineInput
            value={ this.state.baseText }
            onChange={ (newVal) => this.setState({ baseText: newVal }) }
            className={ 'base-input' }
            id={ 'base-input' }
          />
        </div>
        <label htmlFor="">CurrencyInlineInput</label>
        <div className="component">
          <CurrencyInlineInput
            value={ this.state.inlineCurrencyNumber }
            onChange={ (newVal) => this.setState({ inlineCurrencyNumber: newVal }) }
            onBlur={ (newVal) => this.setState({ inlineCurrencyNumber: newVal }) }
          />
        </div>

        <label htmlFor="">DecimalNumberInlineInput</label>
        <div className="component">
          <DecimalNumberInlineInput
            value={ this.state.inlineDecimalText }
            onChange={ (newVal) => this.setState({ inlineDecimalText: newVal }) }
            onBlur={ (newVal) => this.setState({ inlineDecimalText: newVal }) }
            maxNumber={ 25 }
            minNumber={ 2 }
            decimalLength={ 2 }
          />
        </div>
        <label htmlFor="">IntegerNumberInlineInput</label>
        <div className="component">
          <IntegerNumberInlineInput
            value={ this.state.inlineIntegerNumber }
            onChange={ (newVal) => this.setState({ inlineIntegerNumber: newVal }) }
            onBlur={ (newVal) => this.setState({ inlineIntegerNumber: newVal }) }
            maxNumber={ 3000 }
            minNumber={ 100 }
          />
        </div>
        <label htmlFor="">InterestRateInlineInput</label>
        <div className="component">
          <InterestRateInlineInput
            value={ this.state.inlineInterestRate }
            onChange={ (newVal) => this.setState({ inlineInterestRate: newVal }) }
            onBlur={ (newVal) => this.setState({ inlineInterestRate: newVal }) }
          />
        </div>
        <section> inline select</section>
        <label> inline select</label>
        <div className="component">
          <InlineSelect options={ inlineSelectOptions }
            value={ this.state.inlineSelectValue }
            className={ 'inline-select' }
            onChange={ value => {
              this.setState({ inlineSelectValue: value });
            } }
            onBlur={ value => {
              this.setState({ inlineSelectValue: value });
            } }
          />
        </div>
      </div>
    );
  }
}

export default View;
