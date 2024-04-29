import { useState } from 'react'
import styled from 'styled-components'
import { links } from '../../utils/constants/links'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export const Navigation = () => {
  const { t: c, i18n } = useTranslation('concerts')
  const { t: l } = useTranslation('links')
  const lang = i18n.language
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }
  let language = lang == 'is' ? 'icelandic' : 'english'

  return (
    <StyledNavigation className={menuOpen ? 'menuOpen' : ''}>
      <div className='nav-menu' onClick={handleToggle}>
        {!menuOpen ? l('menu') : 'x'}
      </div>

      {menuOpen && (
        <div className='navigation open'>
          <div className={`skew-container-m ${lang == 'en' && 'rightalign'}`}>
            <div className={` ${language} `}>
              <Link href='/'>
                <a className={`nav-link-menu`}>{l('home')}</a>
              </Link>
            </div>
          </div>

          {links.map((link, index) => {
            let main: string = link.label == 'lungalab' ? 'main-con' : ''

            return (
              <div
                key={index}
                className={`skew-container-m ${main} `}
              >
                <div className={`${
                        main.length > 0 ? main : language
                      } ${
                        lang == 'en' && 'rightalign'
                      }`}>
                  <Link href={link.link} >
                    <a
                      className={`nav-link-menu ${
                        main.length > 0 && main 
                      } `}
                    >
                      {l(link.label)}
                    </a>
                  </Link></div>
              </div>
            )
          })}
        </div>
      )}
    </StyledNavigation>
  )
}
export default Navigation

const StyledNavigation = styled.div`
  width: fit-content;
  align-self: self-end;
  &.menuOpen {
    width: 100%;
  }
  .hidden {
    display: none;
  }

  .little-nav .skew-container-m {
    font-size: 10px;
  }
  .nav-link {
    max-height: 20px;
    display: unset;
  }
  .skew-container-m > div > a {
    background-color: #fff;
  }
  .skew-container-m > div > a > span {
    background-color: #fff;
  }
  .skew-container-m > div > a > span:hover {
    background-color: #000;
  }
  .skew-container-m {
    border-top: 1px solid #000;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    max-width: 99.9%;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: 600;
    color: black;
  }

  .navigation {
    font-size: 30px;
    margin-left: 70%;
    width: fit-content;
    align-self: flex-end;
    background-color: #fff;
  }

  .navigation-container {
    overflow: scroll;
  }
  .open {
    width: 100%;
    margin-left: 0;
  }

  .nav-menu {
    background-color: #fff;
    font-weight: 600;
    color: black;
    font-size: 48px;
    text-align: right;
  }
  .nav-menu:hover {
    color: #7bd0f5;
    cursor: pointer;
  }
  .rightalign {
    text-align: right;
  }
`
