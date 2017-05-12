import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  display: flex;
  flex-direction: row
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1em;
  width: 100%;
`

const MainWrapper = ({children}) => (
  <MyDiv>
    {children}
  </MyDiv>
)

export default MainWrapper