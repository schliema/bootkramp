// @flow

import * as React from 'react'
import Brand from './Brand'
import type { BrandsType } from '../Types'
import MainWrapper from './MainWrapper'
import PendingBox from './PendingBox'
import Button from './Button'

interface BrandBannerType extends BrandsType{
  onButtonClick: Function
}

const errorMessage = () => (
  <MainWrapper>
    <div>ERROR!!</div>
  </MainWrapper>
)

const pendingMessage = () => (
  <MainWrapper>
      <PendingBox/>
  </MainWrapper>
)


class BrandBanner extends React.Component {

  componentDidMount() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <div>
        {this.props.error ? (errorMessage()) : (
          this.props.pending ? (pendingMessage()) : (
            <MainWrapper>
              <Button onClick={(event: Event) => {this.props.onButtonClick()}}>Click!</Button>
              {this.props.brands.map(myBrand =>
                <Brand key={myBrand.index} name={myBrand.name} imageLocation={myBrand.imageLocation}/>
              )}
            </MainWrapper>
          )
        )
        }
      </div>
    )
  }
}

export default BrandBanner
