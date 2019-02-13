import React from 'react';
import { mount } from 'enzyme';
import Test from './View';
import sinon from 'sinon';
import * as utils from '../../utils';
import { addSymbol } from '../../utils';

describe('Test', () => {
  let view, sandbox, addSymbolSpy, removeSymbolSpy;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    addSymbolSpy = sandbox.spy(utils, 'addSymbol');
    removeSymbolSpy = sandbox.spy(utils, 'removeSymbol');
    view = mount(<Test
      name={ '123' }
    />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('33', () => {
    expect(addSymbolSpy.calledOnce).to.equal(false);
    expect(removeSymbolSpy.calledWithExactly('bbb')).to.equal(true);
  });

  it('44', () => {
    view.setProps({ name: 124 });
    expect(addSymbolSpy.calledOnce).to.equal(true);
  });
});
