import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

import DimigoinImage from '../assets/images/Dimigoin-Mockup.png'
import EchoImage from '../assets/images/Echo-Mockup.png'
import YourIllust from '../assets/images/Your-Illust.svg'

const ProductList = [
  {
    title: 'DIMIGOIN',
    // eslint-disable-next-line
    description: '디미고인은 교내 시스템 전산화 프로젝트로, Vue.js로 작성된 프론트엔드와 Flask로 작성된 백엔드로 구성되어 있습니다.\
      Sentry, CircleCI 등 최신 기술을 접해 볼 수 있고, 실무에 준하는 프로젝트 규모로 여러 의미 있는 경험을 해 보실 수 있습니다.',
    image: DimigoinImage,
    imageAlt: 'Dimigoin in Macbook'
  },
  {
    title: 'ECHO',
    // eslint-disable-next-line
    description: 'ECHO는 교내 SNS 개발 프로젝트로, 전자투표, 학사일정 등 편의기능은 물론 밴드, 페이스북 페이지, 대나무숲 등 여러개로 나누어져 있는\
      디미고의 여러 커뮤니티를 통합하기 위해 개발하고 있습니다.',
    image: EchoImage,
    imageAlt: 'Echo in Macbook'
  },
  {
    title: '이곳은',
    // eslint-disable-next-line
    description: '2020년, 당신을 위해 남겨져 있습니다.\
      당신이 기획하고, 디자인하고, 개발해 나갈 공간입니다.',
    image: YourIllust,
    imageAlt: 'Your Illust'
  }
]

class Products extends React.Component {
  constructor (props) {
    super(props)

    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)

    this.state = {
      currentIdx: 0
    }
  }

  prevPage () {
    if (this.state.currentIdx === 0) return

    this.setState({
      currentIdx: this.state.currentIdx - 1
    })
  }

  nextPage () {
    if (this.state.currentIdx === ProductList.length - 1) return

    this.setState({
      currentIdx: this.state.currentIdx + 1
    })
  }

  render () {
    return (
      <Container>
        <BrandWrapper>
          <Brand>
            {ProductList[this.state.currentIdx].title}
          </Brand>
          <Description>
            {ProductList[this.state.currentIdx].description}
          </Description>
        </BrandWrapper>
        <Image
          src={ProductList[this.state.currentIdx].image}
          alt={ProductList[this.state.currentIdx].imageAlt}
        />
        <Pagination>
          <Button
            disabled={this.state.currentIdx === 0}
            onClick={this.prevPage}
          >
            이전
          </Button>
          <Button
            disabled={this.state.currentIdx === ProductList.length - 1}
            onClick={this.nextPage}
          >
            다음
          </Button>
        </Pagination>
      </Container>
    )
  }
}

const Container = styled.div`
  width: calc(100vw - 8rem);
  height: calc(100vh - 7rem);
  padding: 1rem 4rem;
  display: flex;
`

const Image = styled.img`
  height: 30rem;
  float: right;
  margin-left: auto;
  align-self: center;
`

const BrandWrapper = styled.div`
  padding: 0 1rem;
  align-self: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Brand = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 5rem;
  justify-self: center;
  align-items: center;
  font-weight: lighter;
`

const Description = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  margin-top: 19px;
  font-size: 1.5rem;
  line-height: 40px;
  font-weight: lighter;
  justify-self: center;
  align-items: center;
`

const Pagination = styled.div`
  position: absolute;
  bottom: 50px;
  flex: 1;
  display: flex;
  justify-content: center;

  button {
    margin-right: 20px;
  }
`

export default Products
