// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'
import {Link} from 'react-router-dom'

const BrandItem = styled.div`
  padding: 1em;
`

const Brand = ({name, imageLocation}: BrandType) => {

  const link = '/brand/' + name

  return (
    <BrandItem>
      <Link to={link}>
        <img src={imageLocation} alt={name}/>
      </Link>
    </BrandItem>
  )
}



export default Brand