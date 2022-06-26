import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import { links } from '../utils/constants/links'

export const LungaLab = () => {
  const { t: lunga, i18n } = useTranslation('lungalab')
  const { t: l } = useTranslation('links')

  const lang = i18n.language

  return (
    <Layout title={l('lungalab')} subtitle={l('lungalab2')}>
      <StyledLungalab>
        <div className='img-container'>
          <img className='img-child' src='/tumblr/16.jpg' />
        </div>
        <div className='text-container'>
          <div className='sub-line'>{lunga('firstline')}</div>
          <div className='text-body'>{lunga('para2')}</div>
        </div>
        <div className='workshops-container'>
          <div className='table'>{lunga('tba')}</div>
        </div>
        <div className="footer-container">
      <div className="text">{lunga('sponsors')}</div>
    </div>

    <div className="img-container">
      <img className="img-child" src="/tumblr/13.jpg" />
    </div>
      </StyledLungalab>
    </Layout>
  )
}
export default LungaLab
const StyledLungalab = styled.div`
.active {
  background: #00ff38;
}
.language-container {
  display: flex;
}
.checkbox {
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.little-nav .skew-container {
  font-size: 48px;
}
.skew-container {
  border-top: 2px solid #000;
  max-width: 99.9%;
  text-decoration: none;
  font-size: 96px;
  font-weight: 600;
  text-align: left;
  color: black;
}
.skew-container .skew {
  -ms-transform: skew(10deg, 0); /* IE 9 */
  -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
  transform: skew(10deg, 0); /* Standard syntax */
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.table {
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  padding: 15px 0 15px 0;
  margin-top: 40px;
  color: #000000;
  text-align: center;
}
.sub-line {
  text-align: center;
}

.text {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  margin: 50px 50px 50px 50px;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
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
