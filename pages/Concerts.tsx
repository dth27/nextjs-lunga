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
import { Fragment } from 'react'
export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  let content = await getContent(lang, 'concerts')
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
              <Fragment key={index}>
                <tr onClick={() => toggleOpen(frontmatter.id)}>
                  <td className='border-bottom name' colSpan={3}>
                    {frontmatter.name}
                  </td>
                  {/* 
                  <td className='border-bottom width' colSpan={1}>
                    {frontmatter.stage}
                  </td>

                  <td className='border-bottom width' colSpan={1}>
                    {frontmatter.time}
                  </td> */}
                  
                </tr>

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
              </Fragment>
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
        <div className='sub-text'>{c('info1')}</div>
        </div>
        <table className='tableConcerts'>
          {/* <thead>
            <tr>
              <th> {c('artist')}</th>
              <th> {c('place')}</th>
            </tr>
          </thead> */}
          {tableBody} 
        </table>

        <div className='center sub-header nav-link'>
          <a
            className='nav-link'
            href='https://tix.is/is/event/17420/lunga-spiral/'
            target='_blank rel="noreferrer"'
          >
            {c('ticket')}
          </a>
        </div>
        {/* <div className='img-container'>
       <img className='img-child' src='/tumblr/2021-6.jpg' />
      </div> */}
      <div className='seperator'></div>
       </StyledConcerts>
    </Layout>
  )
}
export default Concerts
const StyledConcerts = styled.div`
  // .tbody {
  // width: 100%;
  // }

  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

   .center.sub-header.nav-link a:hover {
     color: #7bd0f5;
  }

  .flex-grid .col {
    flex: 1;
    margin: 10px;
  }

  .img-child {
    width: 70%;
    margin-bottom: 20px;
  }

  .seperator {
    width: 100%;
    border-top: 1px solid #000000;
    display: block;
  }

  @media (max-width: 800px) {

    // table.tableConcerts {
    //   display: flex;
    // }

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

  .width {
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
    color: #7bd0f5;
  }
  td.border-top {
    cursor: auto;
  }

  td > img {
    max-width: 42vw;
  }

  .name {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }

  th {
    font-size: 24px;
    font-weight: 600;
    padding-left: 20px;
    text-align: center;
  }

  table.tableConcerts {
    // display: flex;
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
    color: #7bd0f5;
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
  
  .tba {
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 40%;
    padding: 10px;
  }

  .sub-text {
    /* Headline 2 */
    // font-size: 48px;
    font-weight: 600;
    // text-align: left;
    line-height: 105%;
    width: 40%;
    padding: 10px;
    // centered
    font-size: 40px;
    text-align: center;
    width: 62%;

  }

  .tba {
    font-size: 29px;
    width: 95%;
    padding-top: 28px;
    padding-left: 10px;
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

    table.tableConcerts {
      // display: flex;
    }
  }
  
  @media (max-width: 844px) {

    table.tableConcerts {
     margin-top: 80px;
      border-spacing: 0;
      width: 106%;
    }

    table.tableConcerts td {
      display: flex;
      padding-right: 20px;
      padding-left: 20px;
      
    }

    td.border-bottom {
    display: unset;
    }

    table.tableConcerts td > img {
    max-width: 93vw;
    padding-bottom: 10px;    
    }

  .center.sub-header.nav-link a{
    text-align: center;
    font-size: 2.2rem;
    line-height: 2.1rem;
  }

  .seperator {
      display: block;
      width: 106%;
   }

 .grid-container {
  flex-direction: column;
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
    // width: 10px;
    // height: 10px;
    align-self: center;
    width: 85%;
    // margin: 20px;
  }
  .hidden {
    display: none;
  }
`
