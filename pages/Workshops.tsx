import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import React, { useEffect } from 'react'
import { FrontmatterWorkshops } from '../types'
import i18next from 'i18next'
import getContent from '../utils/content/getContent'
import { getEnglishPosts, getIcelandicPosts } from '../lib/api'

export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  let islContent = getIcelandicPosts('workshops')
  let enContent = getEnglishPosts('workshops')
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
export const Workshops = ({ islContent, enContent }: any) => {
  const { t: l } = useTranslation('links')
  const { t: w } = useTranslation('workshops')
  let lang = i18next.language
  let content = lang == 'is' ? islContent : enContent
  const [workshops, setWorkshops] =
    React.useState<Array<FrontmatterWorkshops>>(content)
  useEffect(() => {
    if (lang == 'is') {
      setWorkshops(islContent)
    } else setWorkshops(enContent)
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
    <Layout title={l('workshops')}>
      <StyledWorkshops>
        <div className='flex-grid'>
          <div className='col'>
          <div className='tba'>{w('tba')}</div>
            {/* <div className='text'>{w('5day')}</div>
            <div className='textsmall'>{w('5dayprice')}</div>
            <br />
            <div className='textsmall'>{w('5dayinfo')}</div>
            <div className='sub-header margin-top'>
          <a
            className='nav-link'
            href='https://forms.gle/Ueb6K3xfKd1gNPY66'
            target='_blank rel="noreferrer"'
          >
            {w('applyhere')}
          </a>
        </div> */}
          </div>

          <div className='col'>
          <div className='textsmall'>{w('tbainfo')}</div>
            {/* <div className='text'>{w('3day')}</div>
            <div className='textsmall'>{w('3dayprice1')}</div>
            <div className='textsmall'>{w('3dayprice2')}</div> */}
            <br />

            <div className='textsmall'>{w('3dayinfo')}</div>
          </div>

          {/* <div className='col'>
            <div className='text'>{w('childreninfo')}</div>
          </div> */}
        </div>

        {/* <div className='sub-header'>
          <a
            className='nav-link'
            href='https://podio.com/webforms/27609545/2144502'
            target='_blank rel="noreferrer"'
          >
            {w('applyhere')}
          </a>
        </div> */}

        {/* info commented out here */}

        {/* {workshops &&
          workshops.map((workshop: any, index: any) => {
            const { frontmatter } = workshop

            return (
              <div key={index}>
                <div className='seperator'></div>
                <div className='flex-grid'>
                  <div className='col'>
                    <div className='workshop-title'>{frontmatter.title}</div>
                  </div>
                  <div className='col'>
                    <div className='workshop-about2'>
                      {frontmatter.teacher1}
                      <br />
                      {frontmatter.teacher2}
                      <br />
                      {frontmatter.teacher3}
                    </div>
                  </div>
                  <div className='col'>
                    <div className='workshop-about2'>{frontmatter.length}</div>
                  </div>

                  <div className='col'>
                    <div className='workshop-about2'>
                      {frontmatter.applyhere && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.applyhere}
                            target='_blank rel="noreferrer"'
                          >
                            {w('applyhere')}
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
                      {frontmatter.website && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.website}
                            target='_blank rel="noreferrer"'
                          >
                            {w('website')}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='img-container'>
                  <img className='img-child' src={frontmatter.mynd} />
                </div>
                <div className='flex-grid'>
                  <div className='col'>
                    <div className='workshop-about'>
                      {frontmatter.about1} <br />
                      <br />
                      {frontmatter.about2}
                      <br />
                      <br />
                      {frontmatter.about3}
                    </div>
                  </div>
                  <div className='col'>
                    <div className='workshop-info'>
                      {frontmatter.aboutteacher1}
                      <br />
                      <br />
                      {frontmatter.aboutteacher2}
                      <br />
                      <br />
                      {frontmatter.aboutteacher3}
                      <br />
                      <br />
                      {frontmatter.aboutteacher4}
                      <br />
                      <br />
                      {frontmatter.aboutteacher5}
                    </div>
                  </div>
                </div>
              </div>
            )
          })} */}
          {/* until here */}
        <div className='img-container'>
          <img className='img-child' src='/tumblr/15.jpg' />
        </div>
        <div className='seperator'></div>
        <div className='sub-header'>
          {/* <a
            className='nav-link'
            href='https://forms.gle/Ueb6K3xfKd1gNPY66'
            target='_blank'
            rel='noreferrer'
          >
            {w('applyhere')}
          </a> */}
        </div>
      </StyledWorkshops>
    </Layout>
  )
}
export default Workshops
const StyledWorkshops = styled.div`
  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

  .flex-grid .col {
    flex: 1;
    margin: 10px;
  }

  .tba {
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 55%;
    padding: 10px;
  }

  @media (max-width: 800px) {
    .flex-grid {
      display: block;
    
      .col {
        width: 100%;
        margin: 10px;
      }
    }
    .tba {
      font-size: 29px;
      width: 95%;
      padding-top: 28px;
      padding-left: 10px;
    }
  }

  .head-container {
    display: flex;
  }

  .seperator {
  display: none;
  }

  .sub-text {
    /* Headline 2 */
    font-weight: 600;
    font-size: 48px;
    margin-left: 40px;
    text-align: center;
    color: #000000;
    line-height: 120%;
  }

  .table {
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    padding: 15px 0 15px 0;
    color: #000000;
    text-align: center;
  }

  .workshoptable {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 10px;
  }

  .workshop-title {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 90%;
  }

  .workshop-about {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 30px;
  }

  .workshop-about2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 0px;
  }

  .workshop-info {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin: 30px;
  }

  a:hover {
    color: #00ff38;
  }

  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    line-height: 115%;
  }
  .textsmall {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    line-height: 115%;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
  }

  .img-child {
    max-width: 85%;
    height: auto;
    align-self: center;
    margin: 30px;
  }
`
