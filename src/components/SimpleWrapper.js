import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  padding: 1em;
`

const SimpleWrapper = ({children}) => (
  <MyDiv>
    {children}
  </MyDiv>
)

export default SimpleWrapper