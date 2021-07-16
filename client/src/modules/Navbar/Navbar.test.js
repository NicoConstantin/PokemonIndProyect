import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Navbar from './Navbar';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('Deberia renderizar Dos <NavLink />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
  it('El primer Link debe tener el texto "Home" y cambiar la ruta hacia "/Home".', () => {
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/Home');
    expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
  });
  it('El segundo Link debe tener el texto "Create" y cambiar la ruta hacia "/Create"', () => {
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/Create');
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(NavLink).at(1).text()).toEqual('Create');
  });
})