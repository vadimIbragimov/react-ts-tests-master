import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { OneButton, OneButtonProps } from './index';

const setUp = (props: OneButtonProps) => shallow(<OneButton {...props} />)

describe('OneButton component', () => {
  let component: ReturnType<typeof setUp>;

  beforeEach(() => {
    component = setUp({});
  })

  it('должен запускать onClick при клике', () => {
    const mockCallback = jest.fn();
    component.setProps({onClick: mockCallback})
    component.simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  it('onClick должен принимать true', () => {
    const mockCallback = jest.fn();
    component.setProps({onClick: mockCallback})
    component.simulate('click')
    expect(mockCallback.mock.calls[0][0]).toBeTruthy();
  })
});
