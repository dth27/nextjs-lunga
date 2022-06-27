import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import React from 'react'
import { FrontmatterEvents } from '../types'
export const EventIndex = () => {
  const { t: e } = useTranslation('eventindex')
  const { t: l } = useTranslation('links')
  let lang = i18next.language

  const [events, setEvents] = React.useState<Array<FrontmatterEvents>>()
  React.useEffect(() => {
    fetch('api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, path: 'events' }),
    })
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [i18next.language])
  let opened: string[] = ['']
  const [op, updateOp] = React.useState([''])
  const toggleOpen = (id: string) => {
    if (op.includes(id)) {
      let temps = op.filter((x) => x !== id)
      updateOp(temps)
    } else {
      let temp = op.concat([id])
      updateOp(temp)
    }
  }

  return (
    <Layout title={l('eventindex')}>
      <StyledEventIndex className=''>
        <div className='head-container'>
          <div className='sub-text'>{e('para1')}</div>
          <div className='text'>{e('tba')}</div>
        </div>
        {/* Todo Remove hidden when ready! */}
        <div className='eventindex-container'>
          <table>
            <tr>
              <th className='narrow'>{e('day')}</th>
              <th className='narrow'>Klukkan</th>
              <th>Hvað</th>
              <th>Tegund</th>
              <th>Hvar</th>
            </tr>
            <tbody>
              {events &&
                events.map((event: any, index) => {
                  const { frontmatter } = event
console.log(frontmatter.soundcloud)
                  return (
                    <>
                      <tr onClick={() => toggleOpen(frontmatter.id)}>
                        <td className='border-bottom normal narrow'>
                          {frontmatter.date}
                        </td>
                        <td className='border-bottom normal narrow'>
                          {frontmatter.time}
                        </td>
                        <td className='border-bottom name'>
                          {frontmatter.name}
                        </td>
                        <td className='border-bottom normal'>
                          {frontmatter.type}
                        </td>
                        <td className='border-bottom normal'>
                          {frontmatter.where}
                        </td>
                      </tr>
                      <tr
                        className={
                          op.includes(frontmatter.id) ? 'border' : 'hidden'
                        }
                      >
                        <td className='border-top' colSpan={3}>
                          {frontmatter.descr1}
                          <br />
                          <br />
                          {frontmatter.descr2} <br />
                          <br />
                          {frontmatter.descr3}
                        </td>

                        <td className='border-top' colSpan={2}>
                          <StyledImage src={frontmatter.img} />

                          <div className='grid-container'>
                            {frontmatter.soundcloud && (
                              <div>
                                <a
                                  className='nav-link'
                                  href={frontmatter.soundcloud}
                                  target='_blank'
                                >
                                  Soundcloud
                                </a>
                              </div>
                            )}

                            <div>
                              <a
                                className='nav-link'
                                href={frontmatter.spotify}
                                target='_blank'
                              >
                                Spotify
                              </a>
                            </div>
                            <div>
                              <a
                                className='nav-link'
                                href={frontmatter.instagram}
                                target='_blank'
                              >
                                Instagram
                              </a>
                            </div>
                            <div>
                              <a
                                className='nav-link'
                                href={frontmatter.youtube}
                                target='_blank'
                              >
                                Youtube
                              </a>
                            </div>
                            <div>
                              <a
                                className='nav-link'
                                href={frontmatter.facebook}
                                target='_blank'
                              >
                                Facebook
                              </a>
                            </div>
                            <div>
                              <a
                                className='nav-link'
                                href={frontmatter.website}
                                target='_blank'
                              >
                                Website
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )
                })}
            </tbody>
          </table>
        </div>

        <br />
        <div className='img-container'>
          <img className='img-child' src='/tumblr/15.jpg' />
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
  .grid-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 0 10px;
  }
  .hidden {
    display: none;
  }
  .narrow {
    width: 8vw;
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
    width: 50vw;
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
  .name{
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 90%;
  }

  .img-child {
    max-width: 80%;
    height: auto;
    align-self: center;
    margin: 20px;
  }
`
const StyledImage = styled.img`

`