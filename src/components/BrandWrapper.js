// @flow

import * as React from 'react'
import Brand from './Brand'
import PageWrapper from './PageWrapper'
import MainWrapper from './MainWrapper'
import PendingBox from './PendingBox'

class BrandWrapper extends React.Component {

  componentDidMount() {
    if ((!this.props.currentbrand && this.props.brand) ||
        (this.props.currentbrand && this.props.brand && this.props.currentbrand.name !== this.props.brand)) {
      this.props.load(this.props.brand)
    }
  }

  render() {
    if (this.props.currentbrand && this.props.currentbrand.name === this.props.brand) {
      return (
        <PageWrapper>
          <MainWrapper>
            <Brand {...this.props.currentbrand}/>
          </MainWrapper>
        </PageWrapper>
      )
    } else {
      return (
        <PageWrapper>
          <MainWrapper>
            <PendingBox/>
          </MainWrapper>
        </PageWrapper>
      )
    }
  }
}

export default BrandWrapper