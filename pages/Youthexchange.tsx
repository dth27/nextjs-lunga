import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'

export const YouthExchange = () => {
  const { t: y, i18n } = useTranslation('youthexchange')
  const { t: l } = useTranslation('links')
  return (
    <Layout title={l('youthexchange')}>
      <StyledYouth>
        <div className='img-container'>
          <img className='img-child' src='/euf/5.jpg' />
        </div>
        <div className='text-container'>
          <div className='sub-text'>{y('firstline')}</div>

          <div className='text-body'>{y('para1')}</div>

          <div className='text-body'>{y('para2')}</div>

          <div className='text-body'>{y('para3')}</div>
        </div>
        <div className='img-container'>
          <img className='img-child' src='/euf/1.jpg' />
        </div>
      </StyledYouth>
    </Layout>
  )
}

export default YouthExchange
const StyledYouth = styled.div`
  .head-container {
    display: flex;
  }

  .sub-text {
    /* Headline 2 */
    font-weight: 600;
    font-size: 48px;
    margin-left: 40px;
    text-align: center;
    color: #000000;
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
