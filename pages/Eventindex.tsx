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
        <div className='head-container'>
          <div className='sub-text'>{e('para1')}</div>
          <div className='text'>{e('tba')}</div>
        </div>
        {/* Todo Remove hidden when ready! */}
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
        </div> */}

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
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
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
    border-top: solid 1px #000;
    padding-top: 10px;
    cursor: pointer;
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
`
const StyledImage = styled.img``
