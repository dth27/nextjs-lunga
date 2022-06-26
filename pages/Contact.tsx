import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
export const Contact = () => {
  const { t: r, i18n } = useTranslation('roles')
  const { t: l } = useTranslation('links')
  return (
    <Layout title={l('contact')} noFooter>
      <StyledContact>
        <table>
          <tbody>
            <tr>
              <td>Lunga Festival</td>
              <td>Hafnargata 44, 710 Seyðisfjörður</td>
              <td>LungA@LungA.is</td>
              <td>kt. 600201 2120</td>
            </tr>
            <tr>
              <td>
                {r('director')}
                <br />
                {r('exhangeprogram')}
              </td>
              <td>Björt Sigfinnsdóttir</td>
              <td>bjort@lunga.is</td>
              <td>(+354) 8663046</td>
            </tr>
            <tr>
              <td>
                {r('curator')}
                <br />
                {r('events')}
              </td>
              <td>Þórhildur Tinna Sigurðardóttir</td>
              <td>tinna@lunga.is</td>
              <td>(+354) 8486962</td>
            </tr>
            <tr>
              <td>
                {r('workshops')}
                <br />
                {r('production')}
              </td>
              <td>Sesselja Hlín Jónasardóttir</td>
              <td>sesselja@lunga.is</td>
              <td>(+354) 7702444</td>
            </tr>
            <tr>
              <td>{r('concerts')}</td>
              <td>Hilmar Guðjónsson</td>
              <td>hilmar@lunga.is</td>
              <td>(+45) 53613527</td>
            </tr>
            <tr>
              <td>{r('volunteers')}</td>
              <td>Unnur Birna J. Backmann</td>
              <td>unnur@lunga.is</td>
              <td> </td>
            </tr>
            <tr>
              <td>{r('creativeproductionfamilyfestival')}</td>
              <td>Lama-sea Dear</td>
              <td>lama@lunga.is</td>
              <td>(+354) 7758882</td>
            </tr>
            <tr>
              <td>{r('exhangeprogram')} </td>
              <td>Minerva Pietilä</td>
              <td>minerva@kaospilot.dk</td>
              <td></td>
            </tr>
            <tr>
              <td>
                {r('sponsors')} <br />
                {r('socialmedia')}
              </td>
              <td>Birna Ketilsdóttir Schram</td>
              <td>birna@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('pr')}</td>
              <td>Þóra Flygenring Sigurðardóttir</td>
              <td>thora@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('booking')}</td>
              <td>Simon Bergkjær</td>
              <td>simon@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('booking')}</td>
              <td>Ýmir Gíslason</td>
              <td>ymir@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('photographer')}</td>
              <td>Melkorka Embla Hjartardóttir</td>
              <td> </td>
              <td></td>
            </tr>
            <tr>
              <td>{r('graphics')}</td>
              <td>Gréta Þorkelsdóttir</td>
              <td>greta@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('programming')}</td>
              <td>Diljá Þorkelsdóttir</td>
              <td>dilja4@hotmail.com</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </StyledContact>
    </Layout>
  )
}
export default Contact

const StyledContact = styled.div`
  table {
    margin-top: 150px;
    border-spacing: 0;
    width: 100%;
  }

  td {
    border-bottom: solid 2px #000;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
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
  }
  .table {
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    padding: 15px 0 15px 0;
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
`
