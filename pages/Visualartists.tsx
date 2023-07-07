import { Layout } from '../components/Layout/Layout'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import React, { useEffect } from 'react'
import { FrontmatterVisualartists } from '../types'
import i18next from 'i18next'
import getContent from '../utils/content/getContent'
import { getEnglishPosts, getIcelandicPosts } from '../lib/api'

export const getStaticProps = async (ctx: any) => {
  let lang = i18next.language
  let islContent = getIcelandicPosts('visualartists')
  let enContent = getEnglishPosts('visualartists')
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
export const Visualartists = ({ islContent, enContent }: any) => {
  const { t: l } = useTranslation('links')
  const { t: v } = useTranslation('visualartists')
  let lang = i18next.language
  let content = lang == 'is' ? islContent : enContent
  const [visualartists, setVisualartists] =
    React.useState<Array<FrontmatterVisualartists>>(content)
  useEffect(() => {
    if (lang == 'is') {
      setVisualartists(islContent)
    } else setVisualartists(enContent)
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
    <Layout title={l('visualartists')}>
      <StyledVisualartists className=''>
       
      <div className='text'>{v('subtitle')}</div>
        {visualartists &&
          visualartists.map((visualartists: any, index: any) => {
            const { frontmatter } = visualartists

            return (
              <div key={index}>
                <div className='seperator'></div>
                <div className='visualartists-name'>
                  <div className='col'>
                    <div className='visualartists-artist'>{frontmatter.artist}</div>
                  </div>
                  <div className='col'>
                    <div className='visualartists-exhibition'>
                      {frontmatter.exhibition1}
                      <br />
                      {frontmatter.exhibition2}
                      <br />
                      {frontmatter.exhibition3}
                    </div>
                  </div> 
                 <div className='col'>
                    <div className='visualartists-exhibitiontype'>{frontmatter.exhibitiontype}</div>
                  </div> 
                </div>
                {/* info commmented out here */}
                <div className='img-container'>
                  <img className='img-child' src={frontmatter.mynd} />
                </div>
                <div className='flex-grid'>
                  <div className='col'>
                    <div className='visualartists-about'>
                      {frontmatter.about1} <br />
                      <br />
                      {frontmatter.about2}
                      <br />
                      <br />
                      {frontmatter.about3}
                    </div>
                  </div>
                  <div className='col'>
                  <div className='visualartist-exhibitiontitle'>
                  {frontmatter.exhibitioninfo1}
                    </div>
                    <div className='visualartist-exhibitioninfo'>
                      {frontmatter.exhibitioninfo2}
                      <br />
                      {frontmatter.exhibitioninfo3}
                      <br />
                      <br />
                      {frontmatter.exhibitioninfo4}
                      <br />
                      <br />
                      {frontmatter.exhibitioninfo5}
                    </div>
                    <div className='visualartists-links'>
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
                {/* until here */}
              </div>
            )
          })}
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
      </StyledVisualartists>
    </Layout>
  )
}
export default Visualartists
const StyledVisualartists = styled.div`
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
    .visualartists-links {
    margin: -40px 30px 0px 30px;
    }

    // .visualartist-exhibitioninfo {
    //   margin-bottom: 50px;
    // }
  
  }

  .head-container {
    display: flex;
  }

  .seperator {
    width: 100%;
    border-top: 1px solid #000000;
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

  .visualartisttable {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 10px;
  }

  .visualartists-artist {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 90%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .visualartist-exhibitioninfo {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 30px;
  }

  .visualartists-name{
    margin: 10px;
  }
  

  .visualartists-about {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 30px;
  }

  .visualartists-about2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 0px;
  }

  .visualartists-links {
    margin: 30px;
  }

  .visualartist-exhibitiontitle {
    font-style: italic;
    margin: 30px;
    font-size: 24px;
  }

  .visualartists-info {
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
    max-width: 70%;
    height: auto;
    align-self: center;
    margin: 0px 30px 30px 30px;
  }

  @media (max-width: 844px) {
  }
`
