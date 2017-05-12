// @flow

import * as React from 'react'
import SimpleWrapper from './components/SimpleWrapper'
import AddItemAndSeller from './containers/addItemAndSeller'


const InputPage = ({match}: any) => {
  return (
    <div>
      <SimpleWrapper>
        <h1>Input Page</h1>
        <AddItemAndSeller/>
      </SimpleWrapper>
    </div>
  )
}


export default InputPage;
