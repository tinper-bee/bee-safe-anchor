import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import SafeAnchor from '../src/index';

describe('verifiy click', function () {
    it('SafeAnchor should  click', function () {
        var test = "111";
        function handleClick () {
            test = "222";
        }
      let safeAnchor = shallow(<SafeAnchor onClick={ handleClick } />);
      safeAnchor.simulate('click');
      expect(test == "222").to.equal(true);
    });
});

describe('verifiy disabled', function () {
    it('SafeAnchor should be disabled', function () {
        var test = "111";
        function handleClick () {
            test = "222";
        }
      let safeAnchor = shallow(<SafeAnchor disabled onClick={ handleClick } />);
      safeAnchor.simulate('click');
      expect(test == "111").to.equal(true);
    });
});
