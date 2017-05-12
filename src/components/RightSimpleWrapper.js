import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  padding: 1em;
  margin-left: auto;
  background-color: lightgrey;
`

const RightSimpleWrapper = ({children}) => (
  <MyDiv>
    {children}
  </MyDiv>
)

export default RightSimpleWrapper