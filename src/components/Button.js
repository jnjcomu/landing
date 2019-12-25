import React from 'react'
import styled from 'styled-components'

class Button extends React.Component {
  render () {
    return (
      <JButton
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </JButton>
    )
  }
}

const JButton = styled.button`
  width: 10rem;
  height: 3rem;
  letter-spacing: 0.3rem;
  background-color: white;
  font-size: 1rem;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
  user-select: none;
  background-color: #f8f9fa;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${props => (props.disabled ? ''
    : `&:hover {
      background-color: black;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }`)}
`

export default Button
