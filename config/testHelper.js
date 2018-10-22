require('@babel/register');
const chai = require('chai');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

global.expect = chai.expect;
