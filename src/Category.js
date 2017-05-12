// @flow

import * as React from 'react'
import SimpleWrapper from './components/SimpleWrapper'
import {Link} from 'react-router-dom'


const Category = () => (
  <SimpleWrapper>
    <h1>Hydrauliek & Aandrijftechniek</h1>
    <ul>
      <li><Link to='/item/1'>Item 1</Link></li>
      <li><Link to='/item/2'>Item 2</Link></li>
    </ul>
  </SimpleWrapper>
)


export default Category;
