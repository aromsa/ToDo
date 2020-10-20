import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { findByTestAtrr } from './../../../utils';

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {

  let component
  beforeEach(() => {
    component = setUp()  
  })
  
  it('Should render without errors', () => {
    const container = findByTestAtrr(component, 'headerComponent')
    expect(container.length).toBe(1)
  })

  it('Should render a logo', () => {
    const logo = findByTestAtrr(component, 'logoIMG')
    expect(logo.length).toBe(1)
  })
})
