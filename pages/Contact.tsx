import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
export const Contact = () => {
  const { t: r, i18n } = useTranslation('roles')
  const { t: l } = useTranslation('links')
  return (
    <Layout title={l('contact')} noFooter>
      <StyledContact>
        <div className='contacts-container'>
        <div className="row organisers">
            <div>{r('organisers')}</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="row">
             <div>Þórhildur Tinna Sigurðardóttir</div>
            <div>{r('overall')}</div>
            <div>tinna@lunga.is</div>
            <div>(+354) 8486962</div>
          </div>
          <div className="row">
            <div>Helena Aðalsteinsdóttir</div>
            <div>{r('overall')}</div>
            <div>helena@lunga.is</div>
            <div>(+44)(0)7858810254</div>
          </div>
          <div className="row">
            <div>Halldóra Kristín Lárusdóttir</div>
            <div>{r('community')}</div>
            <div>halldora@lunga.is</div>
            <div>(+354) 8630880</div>
          </div>
          <div className="row">
            <div>Lama-sea Dear</div>
            <div>{r('musicproduction')}</div>
            <div>lama@lunga.is</div>
            <div>(+354)7758882</div>
          </div>
          <div className="row">
            <div>Katerína Spathi</div>
            <div>{r('curatorworkshop')}</div>
            <div>katerina@lunga.is</div>
            <div>(+354) 7713319</div>
          </div>
          <div className="row">
            <div>Gréta Þorkelsdóttir</div>
            <div>{r('graphics')}</div>
            <div>greta@lunga.is</div>
            <div></div>
          </div>
          <div className="row">
            <div>Paula Buškevica</div>
            <div>{r('graphics')}</div>
            <div>paula@lunga.is</div>
            <div></div>
          </div>
          <div className="row last">
            <div>Vikram Pradhan</div>
            <div>{r('photographer')}</div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* Previous layout, aka the table, here */}

        {/* <table>
          <tbody>
            <tr>
              <td>
                {r('overall')}
                <br />

              </td>
              <td>Þórhildur Tinna Sigurðardóttir</td>
              
              <td>tinna@lunga.is</td>
              <td>(+354) 8486962</td>
            </tr>

            <tr>
              <td>
                {r('overall')}
                <br />
              </td>
              <td>Helena Aðalsteinsdóttir</td>
              <td>helena@lunga.is</td>
              <td>(+44)(0)7858810254</td>
            </tr>

            <tr>
              <td>
                {r('community')}
              </td>
              <td>Halldóra Kristín Lárusdóttir</td>
              <td>halldora@lunga.is</td>
              <td>(+354) 8630880</td>
            </tr>

            <tr>
              <td>
                {r('musicproduction')}
              </td>
              <td>Lama-sea Dear</td>
              <td>lama@lunga.is</td>
              <td>(+354)7758882</td>
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
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{r('photographer')}</td>
              <td>Vikram Pradhan</td>
              <td></td>
              <td>(+354) 846 7419</td>
            </tr>

          </tbody>
        </table> */}
      </StyledContact>
    </Layout>
  )
}
export default Contact

const StyledContact = styled.div`
  .contacts-container {
    margin-top: 150px;
  }

  .row {
    border-bottom: solid black 1px;
    padding: 0.1rem 1.5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 2.2fr 3fr 1.5fr 1.7fr;
    font-size: 20px;
    font-weight: 600;
  }

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

  .organisers {
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    padding-bottom: 1vh;
    color: #000000;
    margin: 50px 0px 0 0px;
    text-align: left;
  }

  @media (max-width: 800px) {
    .row {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 0;
    }

    .organisers {
      padding-bottom: 2vh;
    }

    .last {
      border: none;
    }

    .contacts-container {
      margin-top: 80px;
      margin-bottom: 10px;
    }
  }
`
