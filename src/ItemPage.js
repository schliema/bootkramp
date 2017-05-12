// @flow

import * as React from 'react'
import SimpleWrapper from './components/SimpleWrapper'
import VisibleItem from './containers/VisibleItem'


const ItemPage = ({match}: any) => {
  return (
    <div>
      <SimpleWrapper>
        <VisibleItem id={match.params.item}/>
      </SimpleWrapper>
    </div>
  )
}


export default ItemPage;
