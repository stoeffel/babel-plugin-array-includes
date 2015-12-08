var babel = require('babel-core');
import {expect} from 'chai';
import plugin from '../src';

describe('babel-plugin-transform-array-includes', function() {
	it('[1,2,3].includes(1)', function() {
		expect(babel.transform('[1,2,3].includes(1);', {plugins: [plugin], compact: true}).code)
			.to.equal('[1,2,3].indexOf(1)!==-1;');
	});
	it('var a=[]; a.includes(1)', function() {
		expect(babel.transform('var a=[]; a.includes(1);', {plugins: [plugin], compact: true}).code)
			.to.equal('var a=[];a.indexOf(1)!==-1;');
	});
	it('var a=[]; b=a.map(...); b.includes(1)', function() {
		expect(babel.transform('var a=[];b=a.map(x=>x+1);b.includes(1);', {plugins: [plugin], compact: true}).code)
			.to.equal('var a=[];b=a.map(x => x+1);b.indexOf(1)!==-1;');
	});
});