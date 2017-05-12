import * as React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
    border-bottom: 1px solid #d7ac00;
    background: #fc0;
    color: #000;
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
    color: #333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    vertical-align: middle;
    cursor: pointer;
`

const Button = (props) => {
  const {children, ...rest} = props;
  return (
    <MyButton {...rest}>
      {children}
    </MyButton>
  )
}

export default Button