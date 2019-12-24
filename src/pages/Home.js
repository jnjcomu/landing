import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

import DeveloperIllust from '../assets/images/Developer-Illust.svg'

class Home extends React.Component {
  apply () {
    window.location.href = 'https://dimigo.in/request/circle'
  }

  render () {
    return (
      <Container>
        <IdentityWrapper>
          <Identity>
            모든 것을
          </Identity>
          <Identity>
            내 마음대로
          </Identity>
          <Button onClick={this.apply}>
            지원하기
          </Button>
        </IdentityWrapper>
        <Illust
          src={DeveloperIllust}
          alt="Thingking Code"
        />
      </Container>
    )
  }
}

const Container = styled.div`
  width: calc(100vw - 16rem);
  height: calc(100vh - 7rem);
  padding: 1rem 8rem;
  display: flex;
`

const Illust = styled.img`
  height: 40rem;
  float: right;
  margin-left: auto;
  align-self: center;
`

const IdentityWrapper = styled.div`
  padding: 0 1rem;
  align-self: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Identity = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 5rem;
  font-weight: lighter;
  line-height: 100px;
  justify-self: center;
  align-items: center;
`

export default Home
