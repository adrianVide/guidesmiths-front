import React from "react";
import { shallow } from "enzyme";
import PhoneList from './PhoneList';

describe('PhoneList Component', () => {
    it('Should render without errors', () => {
        const component = shallow(<PhoneList />);
        const wrapper = component.find('.list-button');
        expect(wrapper.length).toBe(8)
    }
})
