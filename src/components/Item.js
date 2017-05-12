// @flow

import * as React from 'react'
import styled from 'styled-components'
import LeftSimpleWrapper from '../components/LeftSimpleWrapper'
import RightSimpleWrapper from '../components/RightSimpleWrapper'
import SimpleWrapper from '../components/SimpleWrapper'
import MainWrapper from '../components/MainWrapper'
import Button from '../components/Button'


const ItemSnippet = styled.div`
  padding: 1em;
`
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column
  align-items: left;
  justify-content: center;
`

class Item extends React.Component {

  componentDidMount() {


    let currentItem = null

    this.props.items.map(item => {
      if (item.id === this.props.id){
        currentItem = item
        console.log('itemFound!')
      }
    })

    if (!currentItem) {
      this.props.getItem(this.props.id)
    } else {
      this.props.setCurrentItem(currentItem)
    }
  }

  render() {
    return (
      <ItemSnippet>
        <MainWrapper>
          <LeftSimpleWrapper>
            <img src={this.props.imageLocation} alt={this.props.name} width="200px" height="200px"/>
            <h2>{this.props.partNumber}{' '}{this.props.name}</h2>
          </LeftSimpleWrapper>
          <ItemDetails>
            {this.props.seller ? (
              <LeftSimpleWrapper>€{this.props.seller.price}</LeftSimpleWrapper>
            ) : (
              <LeftSimpleWrapper>€{this.props.price}</LeftSimpleWrapper>
            )}
            {this.props.seller ? (
              <LeftSimpleWrapper></LeftSimpleWrapper>
            ) : (
              <LeftSimpleWrapper>
                <Button>Add to Cart</Button>
              </LeftSimpleWrapper>
            )}
          </ItemDetails>
          {this.props.seller ? (
            <RightSimpleWrapper>
              <img src="https://www.hsound.co.uk/wp-content/uploads/2014/02/Pre-owned.png" alt="pre-owned" width="50px" height="50px"/>
              <h2>{this.props.seller.name}</h2>
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