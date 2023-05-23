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

              </td>
              <td>Þórhildur Tinna Sigurðardóttir</td>
              
              <td>tinna@lunga.is</td>
              <td>(+354) 8486962</td>
            </tr>
            <tr>
              <td>
                {r('director')}
                <br />
              </td>
              <td>Helena Aðalsteinsdóttir</td>
              
              <td>helena@lunga.is</td>
              <td>(+44)(0)7858810254</td>
            </tr>
            <tr>
              <td>
                {r('music')}
              </td>
              <td>Margrét Björk Ólafsdóttir</td>
              <td>margret@lunga.is</td>
              <td>(+44)(0)7471084711</td>
            </tr>

           

            <tr>
              <td>
                {r('curatorworkshop')}
              </td>
              <td>Katerína Spathi</td>
              <td>katerina@lunga.is</td>
              <td>(+354) 7713319</td>
            </tr>


            <tr>
              <td>
                {r('socialmedia')}
              </td>
              <td>Halldóra Kristín Lárusdóttir</td>
              <td>halldora@lunga.is</td>
              <td>(+354) 8630880</td>
            </tr>

            <tr>
              <td>
                {r('PR')}
              </td>
              <td>Þóra Flygenring Sigurðardóttir</td>
              <td>thora@lunga.is</td>
              <td>(+354) 8486884</td>
            </tr>

            <tr>
              <td>{r('graphics')}</td>
              <td>Gréta Þorkelsdóttir</td>
              <td>greta@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('graphics')}</td>
              <td>Paula Buškevica</td>
              <td>paula@lunga.is</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('coding')}</td>
              <td>Diljá Þorkelsdóttir</td>
              <td>dilja4@hotmail.com</td>
              <td></td>
            </tr>
            <tr>
              <td>{r('photographer')}</td>
              <td>Vikram Pradhan</td>
              <td></td>
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
    border-bottom: solid 1px #000;
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
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
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
