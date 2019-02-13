import React from 'react';
import { mount } from 'enzyme';
import Test from './View';
import sinon from 'sinon';
import * as utils from '../../utils';
import { addSymbol } from '../../utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = () => {};

const mountInProvider = (children, store, mountOptions) => {
  return mount(<Provider store={ store }>{ children }</Provider>, mountOptions);
};


function configureStore({ initialState } = {}) {
  return createStore(reducer, initialState);
}

describe('Test', () => {
  let view, sandbox, addSymbolSpy, removeSymbolSpy;
  const store = configureStore({});

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    addSymbolSpy = sandbox.spy(utils, 'addSymbol');
    removeSymbolSpy = sandbox.spy(utils, 'removeSymbol');

    view = mountInProvider(<Test
      name={ '123' }
    />, store);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('11', () => {
    expect(addSymbolSpy.calledOnce).to.equal(false);
    expect(removeSymbolSpy.calledWithExactly('bbb')).to.equal(true);
  });

  it('22', () => {
    view.setProps({
      children: (<Test name={ '124' }/>)
    });

    expect(addSymbolSpy.calledOnce).to.equal(true);
  });
});

