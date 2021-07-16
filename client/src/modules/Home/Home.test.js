import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from './Home';
import FOS from '../FilterOrderShow/FilterOrderShow';
import Cards from '../Cards/Cards'
import Pagination from '../Pagination/Pagination'

configure({adapter: new Adapter()});

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<Home />)
  })

  it('deberia renderizar Un componente de filtro y orden ', () => {
    expect(wrapper.find(FOS)).toHaveLength(1)
  })
  it('deberia renderizar Un componente Cards ', () => {
    expect(wrapper.find(Cards)).toHaveLength(1)
  })
  it('deberia renderizar Un componente de paginacion ', () => {
    expect(wrapper.find(Pagination)).toHaveLength(1)
  })
});