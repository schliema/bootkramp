import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  padding: 1em;
  margin-right: auto;
`

const Row = ({children}) => (
  <MyDiv>
    {children}
  </MyDiv>
)

export default Row