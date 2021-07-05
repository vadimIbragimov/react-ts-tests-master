import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { TwoButtons } from './index';

describe('TwoButtons component', () => {
  it('should slhallow TwoButtons component', () => {
    const component = shallow(<TwoButtons />);
    expect(component).toMatchSnapshot();
  });
  it('should mount TwoButtons component', () => {
    const component = mount(<TwoButtons />);
    expect(component).toMatchSnapshot();
  });
  it('should render TwoButtons component', () => {
    const component = render(<TwoButtons />);
    expect(component).toMatchSnapshot();
  });
  it('should contain text "Кнопка 1"', () => {
    const component = shallow(<TwoButtons />);
    expect(component.find('.one-button').text()).toEqual('Кнопка 1')
  })
});
