import styled from 'styled-components'
import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import React from 'react'
import { FrontmatterEvents } from '../types'
import getContent from '../utils/content/getContent'
import { getEnglishPosts, getIcelandicPosts } from '../lib/api'

export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  //let content = await getContent(lang, 'concerts')
  let islContent = getIcelandicPosts('events')
  let enContent = getEnglishPosts('events')
  if (islContent) {
    return {
      props: {
        islContent,
        enContent,
      },
    }
  } else {
    return {
      props: {},
    }
  }
}
export const EventIndex = ({ islContent, enContent }: any) => {
  const { t: e } = useTranslation('eventindex')
  const { t: l } = useTranslation('links')
  let lang = i18next.language
  let content = lang == 'is' ? islContent : enContent
  const [events, setEvents] = React.useState<Array<FrontmatterEvents>>(content)
  React.useEffect(() => {
    if (lang == 'is') {
      setEvents(islContent)
    } else setEvents(enContent)
  }, [lang])
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
      <div className='tba'>{e('tba')}</div>
        <div className='head-container'>
          <div className='sub-text'>{e('para1')}</div>
        </div>
        {/*commented out here */}
         {/* <div className='eventindex-container'>
          <table>
            <thead>
              <tr>
                <th className='narrow'>{e('day')}</th>
                <th className='narrow'>{e('time')}</th>
                <th>{e('what')}</th>
                <th>{e('type')}</th>
                <th>{e('where')}</th>
              </tr>
            </thead>
            <tbody>
              {events &&
                events.map((event: any, index) => {
                  const { frontmatter } = event
                  return (
                    <>
                      <tr
                        onClick={() => toggleOpen(frontmatter.id)}
                        key={index}
                      >
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
                          <br />
                          <div className='note'>
                          {frontmatter.note}
                          </div>
                        </td>

                        <td className='border-top' colSpan={2}>
                          <StyledImage src={frontmatter.img} />

                          <div className='grid-container'>
                            {frontmatter.soundcloud && (
                              <div>
                                <a
                                  className='nav-link-small'
                                  href={frontmatter.soundcloud}
                                  target='_blank rel="noreferrer"'
                                >
                                  Soundcloud
                                </a>
                              </div>
                            )}

                            {frontmatter.spotify && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.spotify}
                            target='_blank rel="noreferrer"'
                          >
                            Spotify
                          </a>
                        </div>
                      )}
                            {frontmatter.instagram && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.instagram}
                            target='_blank rel="noreferrer"'
                          >
                            Instagram
                          </a>
                        </div>
                      )}
                               {frontmatter.youtube && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.youtube}
                            target='_blank rel="noreferrer"'
                          >
                            Youtube
                          </a>
                        </div>
                      )}
                            {frontmatter.facebook && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.facebook}
                            target='_blank rel="noreferrer"'
                          >
                            Facebook
                          </a>
                        </div>
                      )}
                            {frontmatter.website && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.website}
                            target='_blank rel="noreferrer"'
                          >
                            Website
                          </a>
                        </div>
                      )}
                          </div>
                        </td>
                      </tr>
                    </>
                  )
                })}
            </tbody>
          </table>
        </div>  */}
        {/* until here */}

       {/* <div className='img-container'>
          <img className='img-child' src='/tumblr/15.jpg' />
        </div> */}
        <div className='eventindex-mapcontainer'>
          <img className='eventindex-map' src="/images/eventindex/map.svg" alt="LungA Venue Map" />
          <div className='eventindex-maplegend'>
            <ul>
              <li>1 Fjarðarsel</li>
              <li>2 Supermarket</li>
              <li>3 Gamla Sýslumannshúsið</li>
              <li>4 Aldan</li>
              <li>5 Kaffi Lára</li>
              <li>6 The Church</li>
              <li>7 Saman Sauna</li>
              <li>8 Hospital</li>
              <li>9 Herðubreið HB: LungA HQ, HB Bíó, HB Concert Hall, HB Gallery, HB GYM, HB Lobby, HB Plan</li>
              <li>10 Swimming pool</li>
              <li>11 Heima</li>
              <li>12 Skaftfell</li>
              <li>13 The Technical Museum</li>
              <li>14 Lunga Bliss Tattoo Studios</li>
              <li>15 Tvísöngur</li>
              <li>16 SILO</li>
            </ul>
            </div>
        </div>
        <div className='eventindex-mapcontainer-mobile'>
          <img className='eventindex-map' src="/images/eventindex/map.svg" alt="LungA Venue Map" />
          <div className='eventindex-maplegend'>
            <ul>
              <li>1 Fjarðarsel</li>
              <li>2 Supermarket</li>
              <li>3 Gamla Sýslumannshúsið</li>
              <li>4 Aldan</li>
              <li>5 Kaffi Lára</li>
              <li>6 The Church</li>
              <li>7 Junkyard</li>
              <li>8 Saman Sauna</li>
              <li>9 Hospital</li>
              <li>10 Herðubreið HB: LungA HQ, HB Bíó, HB Concert Hall, HB Gallery, HB GYM, HB Lobby, HB Plan</li>
              <li>11 Swimming pool</li>
              <li>12 Heima</li>
              <li>13 Skaftfell</li>
              <li>14 The Technical Museum</li>
              <li>15 Lunga Bliss Tattoo Studios</li>
              <li>16 Tvísöngur</li>
              <li>17 SILO</li>
            </ul>
            </div>
        </div>
        {/* <div className='seperator'></div>  */}
      </StyledEventIndex>
    </Layout>
  )
}
export default EventIndex

const StyledEventIndex = styled.div`
  .head-container {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
  }
  
  .seperator {
    width: 100%;
    border-top: 1px solid #000000;
  }

  .eventindex-mapcontainer-mobile {
    display:none;
  }

  .tba{
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 40%;
    padding: 10px;
  }

  .eventindex-mapcontainer {
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .eventindex-map {
    width: 75vw;
    border: black;
    border-style: solid;
    border-width: 1px;
    margin-top: 30px;
    margin-left: 20px;
  }

  .eventindex-maplegend {
    display: none;
    // margin-left: -20px;
    // margin-bottom: -23px;
    // font-size: 20px;
    // width: 430px;
  }
    .eventindex-maplegend ul{
    list-style-type: none;
    font-size: 20px;
  }
  .grid-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .footer-container {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
  }
  
  .hidden {
    display: none;
  }
  .narrow {
    width: 8vw;
  }
  .sub-text {
    /* Headline 2 */
    width: 700px;
    font-weight: 600;
    font-size: 24px;
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
    border-top: solid 1px #000;
    padding-top: 10px;
    cursor: pointer;
  }

  img {
    width: 35vw;
  }

  .note {
    font-style: italic;
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
    margin-left: 40px;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }
  .name {
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

  @media (max-width: 844px) {

    @media (max-width: 800px) {
      .flex-grid {
        display: block;
  
        .col {
          width: 100%;
          margin: 10px;
        }
      }
    }

    .tba {
      font-size: 29px;
      width: 95%;
      padding-top: 28px;
      padding-left: 10px;
    }

    .headline {
      20vw;
    }
    .name {
      font-size: 12vw;
    }

    .eventindex-mapcontainer-mobile {
      // display: none;
      flex-direction: column;
      position: relative;
    }

    .eventindex-mapcontainer {
      // display: none;
      justify-content: center;
    }

    .eventindex-map {
      width: 90%;
      align-self: center;
      justify-content: center;
      margin: 30px 30px 30px 30px;
    }

    .eventindex-maplegend {
      display: none;
    }

    img {
      width: 85vw;
    }
  }

`
const StyledImage = styled.img``
