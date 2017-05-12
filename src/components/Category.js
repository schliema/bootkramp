// @flow

import * as React from 'react'
import styled from 'styled-components'
import SimpleWrapper from './SimpleWrapper'
import MainWrapper from './MainWrapper'
import Button from './Button'
import {Link} from 'react-router-dom'


const CategorySnippet = styled.div`
`

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: row
  flex-wrap: wrap;
  border-style: solid;
  border-width: 1px;
  width: 800px;
`

const CategoryInfoElement = styled.div`
  padding: 1em;
`

const RightWrapper = styled.div`
  padding: 1em;
  margin-left: auto;
  width: 100px;
`

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column
  align-items: left;
  justify-content: center;
`

class Category extends React.Component {

  componentDidMount() {
    if (this.props.items.length < 1) {
      this.props.getItems()
    }
  }

  render() {
    return (
      <CategorySnippet>
        <MainWrapper>
          <SimpleWrapper>
              {this.props.items.map(item =>
                <CategoryDiv key={item.id}>
                    <div>
                      <Link to={'/item/' + item.id}>
                        <img src={item.imageLocation} alt={item.name} width="75px" height="75px"/>
                      </Link>
                    </div>
                  <ItemDetails>
                    <CategoryInfoElement>
                      <Link to={'/item/' + item.id}>
                        {item.partNumber}-{item.name}
                      </Link>
                    </CategoryInfoElement>
                    {item.seller ? (
                      <CategoryInfoElement>€{item.seller.price}</CategoryInfoElement>
                    ) : (
                      <CategoryInfoElement>€{item.price}</CategoryInfoElement>
                    )}

                  </ItemDetails>
                  {item.seller ? (
                    <CategoryInfoElement>
                      <img src="https://www.hsound.co.uk/wp-content/uploads/2014/02/Pre-owned.png" alt="pre-owned" width="50px" height="50px"/>
                    </CategoryInfoElement>
                  ) : (<CategoryInfoElement></CategoryInfoElement>)}
                  {item.seller ? (
                    <RightWrapper>
                      <Link to={'/item/' + item.id}>
                        <Button>View Product</Button>
                      </Link>
                    </RightWrapper>
                  ) : (
                    <RightWrapper>
                      <Button>Add to Cart</Button>
                    </RightWrapper>
                  )}

                </CategoryDiv>
              )}
          </SimpleWrapper>
        </MainWrapper>
      </CategorySnippet>
    )
  }
}



export default Category