// @flow

import * as React from 'react'
import styled from 'styled-components'
import LeftSimpleWrapper from '../components/LeftSimpleWrapper'
import RightSimpleWrapper from '../components/RightSimpleWrapper'
import SimpleWrapper from '../components/SimpleWrapper'
import MainWrapper from '../components/MainWrapper'


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
        <MainWrapper>
          <LeftSimpleWrapper>
            <img src={this.props.imageLocation} alt={this.props.name} width="200px" height="200px"/>
            <h2>{this.props.partNumber}{' '}{this.props.name}</h2>
          </LeftSimpleWrapper>
          {this.props.seller ? (
            <RightSimpleWrapper>
              <h2>Pre-owned: {this.props.seller.name}</h2>
              <ul>
                <li>{this.props.seller.address1}</li>
                <li>{this.props.seller.address2}</li>
                <li>Telefoon: {this.props.seller.telephone}</li>
                <li><a href={'mailto:' + this.props.seller.email}>{this.props.seller.email}</a></li>
                <li>Rating: {this.props.seller.rating}</li>
                <li><a href={this.props.seller.url}>{this.props.seller.url}</a></li>
              </ul>
            </RightSimpleWrapper>
          ) :(<SimpleWrapper></SimpleWrapper>) }
        </MainWrapper>
        <MainWrapper>
          <LeftSimpleWrapper>
            <ul>
              {this.props.itemDetails.map(itemDetail =>
                <li key={itemDetail.name}>{itemDetail.name}: {itemDetail.value}</li>
              )}
            </ul>
          </LeftSimpleWrapper>
        </MainWrapper>
      </ItemSnippet>
    )
  }
}



export default Item