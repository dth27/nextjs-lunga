import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
export const EventIndex = () => {
  const { t: e } = useTranslation('eventindex')
  const { t: l } = useTranslation('links')

  return (
    <Layout title={l('eventindex')}>
      <StyledEventIndex className=''>
        <div className='head-container'>
          <div className='sub-text'>{e('para1')}</div>
          <div className='text'>{e('tba')}</div>
        </div>
        <br />
        <div className="img-container">
      <img className="img-child" src="/tumblr/15.jpg"/>
    </div>
      </StyledEventIndex>
    </Layout>
  )
}
export default EventIndex

const StyledEventIndex = styled.div`
.head-container {
  display: flex;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}

.sub-text {
  /* Headline 2 */
  font-weight: 600;
  font-size: 48px;
  margin-left: 40px;
  text-align: left;
  color: #000000;
  line-height: 110%;
}

th {
  /* border-bottom: solid 2px #000; */
  font-size: 24px;
  font-weight: 600;
  padding-left: 20px;
  text-align: left;
}

table {
  margin-top: 100px;
  border-spacing: 0;
  width: 100%;
}

td {
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
}

td.border-bottom {
  border-top: solid 2px #000;
  padding-top: 10px;
}

img {
  width: 69rem;
}

.subtext {
  font-weight: 600;
  font-size: 36px;

  color: #000000;
}

.text {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  margin: 50px 0px 0 0px;
  text-align: left;
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
}`
