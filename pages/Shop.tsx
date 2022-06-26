import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
export const Shop = () => {
  const { t: s } = useTranslation('shop')
  const { t: l } = useTranslation('links')
  return (
    <Layout title={l('shop')}>
      j
      <StyledShop>
        <div className='viewcartcontainer'>
          <div className='viewcartbutton'>
            <form
              target='paypal'
              action='https://www.paypal.com/cgi-bin/webscr'
              method='post'
            >
              <input type='hidden' name='cmd' value='_s-xclick' />
              <input
                type='hidden'
                name='encrypted'
                value='-----BEGIN PKCS7-----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-----END PKCS7-----'
              />
              <input
                type='image'
                className='imageInput'
                src='/components/viewcart.png'
                name='submit'
                alt='PayPal - The safer, easier way to pay online!'
              />
              <img
                alt=''
                src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
                width='1'
                height='1'
              />
            </form>
          </div>
        </div>
        <div className='newmerchcontainer'>
          <div className='img-container'>
            <img className='img-child' src='/webshop/_1.png' />
          </div>
        </div>
        <div className='sub-line'>
          {s('book')}
          <br />
          €49
          <form
            target='paypal'
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
          >
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input
              type='hidden'
              name='hosted_button_id'
              value='9WAJR53Z6W7P2'
            />
            <input
              className='imageInput'
              type='image'
              src='/components/addtocart.png'
              name='submit'
              alt='PayPal - The safer, easier way to pay online!'
            />
            <img
              alt=''
              src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
              width={1}
              height={1}
            />
          </form>
        </div>
        <div className='text-container'>
          <div className='text-body'>{s('info1')}</div>
          <div className='text-body'>{s('info2')}</div>
          <div className='text-body'>{s('info3')}</div>
          <div className='text-body'>{s('info4')}</div>
        </div>
        <div className='newmerchcontainer'>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_2.png' />
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_3.png' />
            </div>
          </div>
        </div>
        <div className='text-container'>
          <div className='sub-line'>{s('quote')}</div>
          <div className='text-body'>{s('name')}</div>
        </div>
        <div className='newmerchcontainer'>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_4.png' />
            </div>
            <div className='newmerchchild'>
              <div className='img-container'>
                <img className='img-child' src='/webshop/_5.png' />
              </div>
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_6.png' />
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_7.png' />
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_8.png' />
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_9.png' />
            </div>
          </div>
          <div className='newmerchchild'>
            <div className='img-container'>
              <img className='img-child' src='/webshop/_10.png' />
            </div>
          </div>
        </div>
        <div className='text-container'>
          <div className='text-body'>{s('para1')}</div>
        </div>
      </StyledShop>
    </Layout>
  )
}
export default Shop
const StyledShop = styled.div`
  .imageInput {
    height: 60px;
    padding-top: 5px;
  }
  .headline {
    text-align: center;
  }
  .sock_form {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .sub-line {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .text-body {
    text-align: center;
  }

  .shopitem__year > th {
    padding-top: 10px;
    font-size: 48px;
  }

  .grid-container {
    align-content: center;
  }

  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin: 0px 0px 0px 0px;
    text-align: center;
  }

  .dropdown {
    text-align: left;
  }

  img {
    max-width: 1000px;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }

  .img-child {
    max-height: 80%;
    height: auto;
    align-self: center;
    margin: 0px;
  }

  th {
    /* border-bottom: solid 2px #000; */
    font-size: 30px;
    font-weight: 600;
    padding-left: 20px;
    text-align: left;
  }

  tr:hover > td.border-bottom {
    cursor: pointer;
    color: white;
    background-color: #000;
  }

  table {
    margin-top: 100px;
    border-spacing: 0;
    width: 100%;
  }

  td {
    padding-left: 20px;
    font-size: 2em;
    font-weight: 600;
  }

  #small {
    font-size: 1.5em;
  }

  td.border-bottom {
    border-top: solid 2px #000;
    padding-top: 10px;
  }

  .center {
    text-align: center;
  }

  .card-img {
    position: relative;
    margin-bottom: 15px;
  }

  .card-img > img {
    display: block;
    margin: 0 auto;
  }

  .actions {
    font-size: 1.5em;
    height: 2.5em;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #000;
  }

  .actions > span {
    cursor: pointer;
    transition: all 200ms;
  }

  .actions > span.prev {
    margin-left: 0px;
  }

  .actions > span.next {
    margin-right: 0px;
  }

  .actions > span:hover {
    color: #00ff38;
  }

  .text_dropdown {
    font-size: 1em;
  }

  td.text_dropdown {
    font-size: 1em;
  }
  .sock__table {
    margin: 0;
  }
  .viewcartcontainer {
    position: fixed;
    width: auto;
    height: 50px;
    top: 20%;
    right: 0;
    margin: 0 auto;
    display: flex; /* or inline-flex */
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    z-index: 1000;
  }

  .viewcartbutton {
    flex: none;
    align-self: center;
  }

  .newmerchcontainer {
    width: auto;
    flex-wrap: wrap;
    display: flex; /* or inline-flex */
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    z-index: 1000;
  }

  .newmerchchild {
    flex: none;
    align-self: center;
  }
`
