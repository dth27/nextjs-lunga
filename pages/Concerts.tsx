import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import styled, { ThemeConsumer } from 'styled-components'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import React, { useEffect } from 'react'
import i18next from 'i18next'
import { FrontmatterConcerts } from '../types'
import getContent from '../utils/content/getContent'
import { getEnglishPosts, getIcelandicPosts } from '../lib/api'
export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  //let content = await getContent(lang, 'concerts')
  let islContent = getIcelandicPosts('concerts')
  let enContent = getEnglishPosts('concerts')
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
export const Concerts = ({ islContent, enContent }: any) => {
  const { t: l } = useTranslation('links')
  const { t: c } = useTranslation('concerts')
  let lang = i18next.language
  let content = lang == 'is' ? islContent : enContent
  const [concerts, setConcerts] =
    React.useState<Array<FrontmatterConcerts>>(content)
  useEffect(() => {
    if (lang == 'is') {
      setConcerts(islContent)
    } else setConcerts(enContent)
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

  const tableBody = React.useMemo(() => {
    return (
      <tbody>
        {concerts &&
          concerts.map((concert: any, index: number) => {
            const { frontmatter } = concert
            return (
              <>
                <tr onClick={() => toggleOpen(frontmatter.id)} key={index}>
                  <td className='border-bottom name' colSpan={1}>
                    {frontmatter.name}
                  </td>

                  <td className='border-bottom Width' colSpan={1}>
                    {frontmatter.stage}
                  </td>
                  
                </tr>
                {/* Hidden content */}
                <tr className={op.includes(frontmatter.id) ? '' : 'hidden'}>
                  <td className=''>
                    {frontmatter.descr1}
                    <br />
                    <br />
                    {frontmatter.descr2} <br />
                    <br />
                    {frontmatter.descr3}
                  </td>

                  <td className=''>
                    <img src={frontmatter.img} />
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

                      {frontmatter.mixcloud && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.mixcloud}
                            target='_blank rel="noreferrer"'
                          >
                            Mixcloud
                          </a>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </>
            )
          })}
        <tr></tr>
      </tbody>
    )
  }, [opened])
  return (
    <Layout title={l('concerts')}>



      <StyledConcerts>


        <div className='footer-container'>
          <div className='sub-text'>{c('header')}</div>
          <div className='text'>{c('info1')}</div>
        </div>


     <div className='center sub-header nav-link'>
          <a
              className='nav-link'
              href='https://tix.is/is/event/15292/lunga-bliss/'
              target='_blank rel="noreferrer"'
          >
            {c('ticket')}
          </a>
        </div> 



        <table>
          <thead>
            <tr>
              <th> {c('artist')}</th>
              <th> {c('place')}</th>
            </tr>
          </thead>
          {tableBody}
        </table>

        <br />
        <br />
        {/* <div className='center sub-header nav-link'>
          <a
            className='nav-link'
            href='https://tix.is/is/event/13027/'
            target='_blank rel="noreferrer"'
          >
            {c('ticket')}
          </a>
        </div> */}


      </StyledConcerts>

      {/*<div className='img-container'>*/}
      {/*  <img className='img-child' src='/tumblr/2021-6.jpg' />*/}
      {/*</div>*/}
    </Layout>
  )
}
export default Concerts
const StyledConcerts = styled.div`
  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

  .flex-grid .col {
    flex: 1;
    margin: 10px;
  }

  @media (max-width: 800px) {
    .flex-grid {
      display: block;

      .col {
        width: 100%;
        margin: 10px;
      }
    }
  }
  .grid-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .Width {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .border-top {
    border-bottom: 1px solid #000;
  }

  .grid-container,
  tr {
    vertical-align: top;
    padding: 5px;
  }
  tr {
    cursor: pointer;
  }
  td.border-bottom.name:hover {
    color: #a3ffa3;
  }
  td.border-top {
    cursor: auto;
  }

  td > img {
    max-width: 45vw;
  }

  .name {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }
  .nav-link:hover {
    color: #a3ffa3;
  }

  th {
    font-size: 24px;
    font-weight: 600;
    padding-left: 20px;
    text-align: center;
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
  }

  .center {
    text-align: center;
  }

  .center a:hover {
    color: #00ff38;
  }

  .center a:visited {
    color: #000000;
  }

  .sub-header {
    text-align: center;
    padding: 20px;
  }

  .footer-container {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
  }
  

  .sub-text {
    /* Headline 2 */
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 40%;
    padding: 10px;
  }

  .text {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    line-height: 115%;
    color: #000;
    width: 40%;
    padding: 10px;

  }

  @media all and (max-width: 500px) {
    .footer-container {
      flex-direction: column;
    }
    .sub-text {
      width: 100%
    }
    .text{
      width: 100%
    }
    
  }
  

  .img-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }

  .img-child {
    width: 10px;
    height: 10px;
    align-self: center;
    margin: 20px;

  }
  .hidden {
    display: none;
  }
`
