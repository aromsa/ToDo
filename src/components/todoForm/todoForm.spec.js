import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';
import { findByTestAtrr } from './../../utils';

const setUp = (props={}) => {
  const component = shallow(<Form {...props} />)
  return component
}

describe('Form Component', () => {

  let component
  beforeEach(() => {
    component = setUp()  
  })
  
  it('Should render without errors', () => {
    const container = findByTestAtrr(component, 'formComponent')
    expect(container.length).toBe(1)
  })
  
})