// @flow

import * as React from 'react'
import SimpleWrapper from './components/SimpleWrapper'
import VisibleItem from './containers/VisibleItem'


const ItemPage = ({match}: any) => {
  console.log('hoppa')
  return (
    <div>
      <SimpleWrapper>
        <h1>ItemPage</h1>
      </SimpleWrapper>
      <SimpleWrapper>
        <VisibleItem id={match.params.item}/>
      </SimpleWrapper>
    </div>
  )
}


export default ItemPage;
