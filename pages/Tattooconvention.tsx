import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import React, { useEffect } from 'react'
import { FrontmatterTattooconvention } from '../types'
import i18next from 'i18next'
import getContent from '../utils/content/getContent'
import { getEnglishPosts, getIcelandicPosts } from '../lib/api'

export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  let islContent = getIcelandicPosts('tattooconvention')
  let enContent = getEnglishPosts('tattooconvention')
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
export const Tattooconvention = ({ islContent, enContent }: any) => {
  const { t: l } = useTranslation('links')
  const { t: v } = useTranslation('tattooconvention')
  let lang = i18next.language
  let content = lang == 'is' ? islContent : enContent
  const [tattooconvention, setTattooconvention] =
    React.useState<Array<FrontmatterTattooconvention>>(content)
  useEffect(() => {
    if (lang == 'is') {
      setTattooconvention(islContent)
    } else setTattooconvention(enContent)
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
    <Layout title={l('tattooconvention')}>
      <StyledTattooconvention>
      <div className='flex-grid'>

        <div className='col'>
          <div className='text'>{v('moreinfo')}</div>
        </div>

        <div className='col'>
          <div className='text'>{v('moreinfo2')}</div>
        </div>

      </div>

        {tattooconvention &&
          tattooconvention.map((tattooconvention: any, index: any) => {
            const { frontmatter } = tattooconvention

            return (
              <div key={index}>
                <div className='seperator'></div>

                <div className='flex-grid'>
                  <div className='col'>
                    <div className='tattooconvention-artist'>{frontmatter.artist}</div>
                  </div>
                </div>

                <div className='img-container'>
                  <img className='img-child' src={frontmatter.mynd} />
                </div>

                <div className='flex-grid'>
                  
                  <div className='col'>
                    <div className='tattooconvention-about'>
                      {frontmatter.about1}
                    </div>
         
                    <div className='tattooconvention-links'>
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
                            Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        <div className='seperator'></div>
      </StyledTattooconvention>
    </Layout>
  )
}
export default Tattooconvention
const StyledTattooconvention = styled.div`
  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

  .flex-grid .col {
    flex: 1;
    padding: 10px;
    margin: auto;
  }

  .tattooconvention-links {
    margin: -40px 30px 0px 30px;
    }

  .head-container {
    display: flex;
  }

  .seperator {
    width: 100%;
    border-top: 1px solid #000000;
    display: block;
  }

  .sub-text {
    font-weight: 600;
    font-size: 48px;
    margin-left: 40px;
    text-align: center;
    color: #000000;
    line-height: 120%;
    padding-bottom: 50px;
  }

  .tattooconvention-artist {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 90%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .tattooconvention-exhibitioninfo {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 30px;
  }

  .tattooconvention-name{
    margin: 10px;
  }
  
  .tattooconvention-about {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    padding: 10px;
    margin: auto;
    width: 800px;
  }

  .tattooconvention-about2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 0px;
  }

  .tattooconvention-links {
    padding: 30px;
    margin: auto;
    width: 800px;
  }

  .tattooconvention-exhibitiontitle {
    font-style: italic;
    margin: 30px;
    font-size: 24px;
  }

  .tattooconvention-info {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin: 30px;
  }

  a:hover {
    color: #00ff38;
  }

  .tba {
    font-size: 48px;
    font-weight: 600;
    text-align: left;
    line-height: 105%;
    width: 40%;
    padding: 10px;
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
    padding-bottom: 30px;
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
    max-width: 50%;
    height: auto;
    align-self: center;
    margin: 0px 30px 30px 30px;
  }

  @media (max-width: 800px) {
    .tba {
      font-size: 29px;
      width: 95%;
      padding-top: 28px;
      padding-left: 10px;
    }

    .flex-grid {
    display: block;
    }
  
    .col {
      width: 100%;
      margin: 10px;
    }
      
    .tattooconvention-about {
       width: unset;
       }

    .tattooconvention-links {
       width: unset;
       padding: 20px 0px 20px 10px;
       }

  }
`
