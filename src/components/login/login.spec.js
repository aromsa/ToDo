import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';
// import { findByTestAtrr } from './../../utils';

const setUp = (props={}) => {
  const component = shallow(<Login {...props} />)
  return component
}

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

describe('Login Component', () => {

  let component
  beforeEach(() => {
    component = setUp()  
  })
  
  it('Should render without errors', () => {
    const container = findByTestAtrr(component, 'loginComponent')
    expect(container.length).toBe(1)
  })

  // it('Should render a logo', () => {
  //   const logo = findByTestAtrr(component, 'logoIMG')
  //   expect(logo.length).toBe(1)
  // })
})