import type { NextPage } from 'next'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Headline from '../components/Headline/Headline'
import Footer from '../components/Footer/Footer'
import { useTranslation } from 'react-i18next'

const About: NextPage = () => {
  const { t: al } = useTranslation('aboutlunga')
  const { t: l } = useTranslation('links')

  return (
    <StyledAbout className='about'>
      {/* <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/> */}
      <Header />
      <Headline title={l('about')} />
      <div className='img-container'>
        <img className='img-child' src='/tumblr/14-2018.jpg' />
      </div>

      <div className='text-container'>
        <div className='sub-line'>{al('firstline')}</div>
        <div className='text-body'>{al('para1')}</div>
        <div className='text-body'>{al('para2')}</div>
        <div className='text-body'>{al('para3')}</div>

        <div className='sub-line'>{al('lastline')}</div>
      </div>
      <div className='headlines headline'>{al('footer')}</div>

      <div className='img-container'>
        <img className='img-child' src='/tumblr/5.jpg' />
      </div>

      <Footer />
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div`
  body {
    background-color: #f6fff7;
  }
  .headlines {
    text-align: center;
  }
  .sub-line {
    text-align: center;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }

  .img-child {
    max-width: 80%;
    height: auto;
    align-self: center;
    margin: 20px;
  }
`
