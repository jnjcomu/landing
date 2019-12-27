import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

/** Stack Logos */
import VueLogo from '../assets/images/Vue.svg'
import ReactLogo from '../assets/images/React.svg'
import FlaskLogo from '../assets/images/Flask.svg'
import ExpressLogo from '../assets/images/Express.svg'
import MongoDBLogo from '../assets/images/MongoDB.svg'
import MySQLLogo from '../assets/images/MySQL.svg'
import GitLogo from '../assets/images/Git.svg'
import KotlinLogo from '../assets/images/Kotlin.svg'

const StackList = [
  {
    title: 'Vue',
    description: 'Vue는 디미고인과 ECHO에 사용된 프론트엔드 프레임워크입니다. Vuex, Vue-router 등 추가적인 프레임워크도 사용하고 있습니다.',
    image: VueLogo,
    imageAlt: 'Vue Logo'
  },
  {
    title: 'React',
    description: '현재 React로 개발된 프로젝트는 없습니다. 이 랜딩 페이지를 기점으로 2020년 여러 프로젝트를 React로 리팩토링 하는 것을 목표로 하고 있습니다.',
    image: ReactLogo,
    imageAlt: 'React Logo'
  },
  {
    title: 'React Native',
    // eslint-disable-next-line
    description: '현재 Swift, Kotlin 등 여러 언어로 작성된 모바일 앱을 하나의 프로젝트로 통합하기 위해 도입한 프레임워크입니다.\
      현재 디미고인앱을 React Native로 리팩토링하고 있습니다.',
    image: ReactLogo,
    imageAlt: 'React Native Logo'
  },
  {
    title: 'Git',
    // eslint-disable-next-line
    description: 'Git은 현재 사용하고 있는 분산 버전 관리 시스템으로, 체계화된 협업을 경험해 보실 수 있습니다.\
      또한, 자체적인 GitLab 서버를 통해 CI/CD를 구축해 효율적인 배포 시스템을 구현했습니다.',
    image: GitLogo,
    imageAlt: 'Git Logo'
  },
  {
    title: 'Flask',
    description: 'Flask는 현재 디미고인과 ECHO의 RESTful API를 구성하고 있는 백엔드 프레임워크입니다.',
    image: FlaskLogo,
    imageAlt: 'Flask Logo'
  },
  {
    title: 'Express',
    description: 'Express는 Node.js 백엔드 프레임워크입니다. 방과 후 신청 기능 등에 점진적인 도입을 시도해 보고 있습니다.',
    image: ExpressLogo,
    imageAlt: 'Express Logo'
  },
  {
    title: 'MySQL',
    description: 'MySQL은 현재 백엔드 데이터베이스의 대부분을 이루고 있는 DBMS입니다.',
    image: MySQLLogo,
    imageAlt: 'MySQL Logo'
  },
  {
    title: 'MongoDB',
    description: 'MongoDB는 동적 스키마를 지원하는 데이터베이스 시스템입니다. 현재 MySQL이 적용된 ECHO의 API 서버를 MongoDB로 리팩토링하는 것을 목표로 하고 있습니다.',
    image: MongoDBLogo,
    imageAlt: 'MongoDB Logo'
  },
  {
    title: 'Kotlin',
    description: 'Kotlin은 현재 디미고인 안드로이드 앱에 사용된 언어입니다.',
    image: KotlinLogo,
    imageAlt: 'Kotlin Logo'
  }
]

class Stacks extends React.Component {
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
    if (this.state.currentIdx === StackList.length - 1) return

    this.setState({
      currentIdx: this.state.currentIdx + 1
    })
  }

  render () {
    return (
      <Container>
        <StackWrapper>
          <Stack>
            {StackList[this.state.currentIdx].title}
          </Stack>
          <Description>
            {StackList[this.state.currentIdx].description}
          </Description>
        </StackWrapper>
        <Image
          src={StackList[this.state.currentIdx].image}
          alt={StackList[this.state.currentIdx].imageAlt}
        />
        <Pagination>
          <Button
            disabled={this.state.currentIdx === 0}
            onClick={this.prevPage}
          >
            이전
          </Button>
          <Button
            disabled={this.state.currentIdx === StackList.length - 1}
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
  width: 100vw;
  flex: 1;

  padding: 1rem 2rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 25rem;

  @media (max-width: 690px) {
    display: none;
  }
`

const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`

const Stack = styled.span`
  word-wrap: break-word;
  word-break: keep-all;
  font-size: 5rem;
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
  align-items: center;
`

const Pagination = styled.div`
  @media (max-width: 690px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
  }

  @media (min-width: 690px) {
    position: absolute;
    bottom: 50px;
    flex: 1;
    display: flex;
  }

  button:first-child {
    margin-right: 20px;
  }
`

export default Stacks
