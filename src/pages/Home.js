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
          <ButtonWrapper>
            <Button onClick={this.apply}>
              지원하기
            </Button>
          </ButtonWrapper>
        </IdentityWrapper>
        <IllustBox
          src={DeveloperIllust}
          alt="Thingking Code"
        />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100vw;
  flex: 1;

  padding: 1rem 2rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const IllustBox = styled.img`
  height: 37rem;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`

const IdentityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Identity = styled.span`
  word-wrap: break-word;
  word-break: break-all;
  font-size: 4.5rem;
  font-weight: lighter;
  line-height: 100px;
  align-items: center;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2.7px solid black;
`

export default Home
