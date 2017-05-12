// @flow

import * as React from 'react'
import styled from 'styled-components'


const ItemSnippet = styled.div`
  padding: 1em;
`

class Item extends React.Component {

  componentDidMount() {
    this.props.getItem(this.props.id)
  }

  render() {
    return (
      <ItemSnippet>
        <h1>{this.props.partNumber}{' '}{this.props.name}</h1>
        <img src={this.props.imageLocation} alt={this.props.name} width="150px" height="150px"/>
        <ul>
          {this.props.itemDetails.map(itemDetail =>
            <li key={itemDetail.name}>{itemDetail.name}: {itemDetail.value}</li>
          )}
        </ul>
      </ItemSnippet>
    )
  }
}



export default Item