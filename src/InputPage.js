// @flow

import * as React from 'react'
import MainWrapper from './components/MainWrapper'
import LeftSimpleWrapper from './components/LeftSimpleWrapper'
import SimpleWrapper from './components/SimpleWrapper'
import AddItemAndSeller from './containers/addItemAndSeller'
import styled from 'styled-components'

const Header = styled.div`
  width: 300px;
`

const HeaderImg = styled.div`
  width: 100px;
`




const InputPage = ({match}: any) => {
  return (
    <div>
      <MainWrapper>
        <div>
          <img src="https://www.hsound.co.uk/wp-content/uploads/2014/02/Pre-owned.png" alt="pre-" width="50px" height="50px"/>
        </div>
        <LeftSimpleWrapper>
          <h1>My Preowned Items</h1>
        </LeftSimpleWrapper>
      </MainWrapper>
      <SimpleWrapper>
        <AddItemAndSeller/>
      </SimpleWrapper>
    </div>
  )
}


export default InputPage;
