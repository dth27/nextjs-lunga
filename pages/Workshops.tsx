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
          <div className='col w-info'>
            <div className='textsmall'>{w('tbainfo')}</div>
          </div>

          <div className='col w-info'>
            <div id="youth-workshop-container" className='text'>{w('childreninfo')}</div>
            <br />
            {/* <div className='textsmall'>{w('generalinfo')}</div>
            <div className='textsmall'>{w('generalinfo2')}</div>
            <div className='textsmall'>{w('generalinfo3')}</div> */}
            <div className='textsmall'>{w('generalinfo5')}</div>
            <div className='textsmall'></div>
            <br /><br />
            <div className='apply-link'>
              <a
                // className='apply-link'
                href='https://docs.google.com/forms/d/16rjeX2jHLuMVN2XcPQgkPxsyyDmqOpF29aAPqS5pCks/formrestricted'
                target='_blank rel="noreferrer"'
              >
                {w('applyhere')}
              </a>
            </div>
          </div>

          <div className='col w-info'>
          <div className='text'>{w('5day')}</div>
          <br />
            <div className='textsmall'>{w('5dayprice')}</div>
            <div className='textsmall'>{w('5dayinfo')}</div>
            <br /><br />
            {/* <div className='apply-link'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfgJD-E5_nNeKZUd9C1z-uDlGS-oJwtDkq46IEJ4lJ8LKiW0A/viewform'
                target='_blank rel="noreferrer"'
              >
                {w('applyhere')}
              </a>
            </div> */}
          </div>
        </div>

        {/* info here */}

        {workshops &&
          workshops.map((workshop: any, index: any) => {
            const { frontmatter } = workshop

            return (
              <div key={index}>
                <div className='seperator'></div>
                <div className='flex-grid workshops'>
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
                  {/* <div className='col'>
                    <div className='workshop-about2'>{frontmatter.length}</div>
                  </div> */}

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
                       {frontmatter.instagram2 && (
                        <div>
                          <a
                            className='nav-link-small'
                            href={frontmatter.instagram2}
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
                      <p>{frontmatter.about1}</p>
                      <p>{frontmatter.about2}</p>
                      <p>{frontmatter.about3}</p>
                      <p>{frontmatter.about4}</p>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='workshop-info'>
                      <p>{frontmatter.aboutteacher1}</p>
                      <p>{frontmatter.aboutteacher2}</p>
                      <p>{frontmatter.aboutteacher3}</p>
                      <p>{frontmatter.aboutteacher4}</p>
                      <p>{frontmatter.aboutteacher5}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* until here */}
        {/* <div className='img-container'>
          <img className='img-child' src='/tumblr/15.jpg' />
        </div> */}
        <div className='sub-header'>
          <a
            className='nav-link'
            href='https://docs.google.com/forms/d/e/1FAIpQLSfgJD-E5_nNeKZUd9C1z-uDlGS-oJwtDkq46IEJ4lJ8LKiW0A/viewform'
            target='_blank'
            rel='noreferrer'
          >
            {w('applyhere')}
          </a>
        </div>
        {/* <div className='seperator'></div> */}
      </StyledWorkshops>
    </Layout>
  )
}
export default Workshops
const StyledWorkshops = styled.div`

  .flex-grid.workshops {
    padding-top: 30px;
    padding-left: 10px;
  }

  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

  .flex-grid .col {
    flex: 1;
    margin: 10px;
  }

  #youth-workshop-container {
    margin-right: 9px;
  }

  .apply-link {
    font-size: 5vw;
    text-align: center;
  } 

  .apply-link a {
    font-size: 4vw;
    text-align: center;
  } 

  .apply-link-top {
    padding: 0px 0px 20px 0px;
    margin: 0px;
    font-size: 0px;
    text-align: center;
  }

  .tba {
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 88%;
    padding: 0px 10px 10px 20px;
  }

  .workshop-about {
    margin: 10px 30px 30px 30px;
  }

  .workshop-about2 {
    text-align: center;
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

    .apply-link a{
      font-size: 10vw;
      text-align: center;
  
    }

    div.workshop-about {
      margin: 10px 20px 30px 20px;
    }

    .workshop-about2 {
      text-align: start;
    }

    .flex-grid.workshops {
      padding-top: 0px;
    }

    .col.w-info {
      padding-bottom: 20px;
    }

    img.img-child {
      max-width: 65%;
    }

    div.workshop-info {
      font-size: 16px;
      margin: 10px 20px 30px 20px;
    }
  }

  .head-container {
    display: flex;
  }

  .sub-header {
    padding: 20px;
    font-size: 0px;
  }

  .seperator {
    width: 103%;
    border-top: 1px solid #000000;
    margin-top: 10px;
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
    margin: 10px 30px 30px 30px;
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
    margin: 10px 30px 30px 30px;
  }

  a:hover {
    color: #7bd0f5;
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
    max-width: 65%;
    height: auto;
    align-self: center;
    margin: 30px;
  }
`
