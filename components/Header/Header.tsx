import Navigation from "../Navigation/Navigation"
import styled from "styled-components"
import { changeLanguage } from "i18next"
import { useTranslation } from 'react-i18next'

type HeaderProps = {
  Frontpage?:boolean
}

export const Header = ({Frontpage}:HeaderProps) => {
    const {t, i18n} = useTranslation('about')
    const lang = i18n.language
    const handleLanguage = () => {
        if(lang == 'is'){
            changeLanguage('en')
        }
        else changeLanguage('is')
    }
    return (<StyledHeader>
    <div className="header">
      { !Frontpage && <Navigation/>}
    </div>

    <div className="language-thing">
      <div className="language-options pointer-mouse">
        <div className={`checkbox ${lang=='is' && 'active'}`} onClick={handleLanguage}></div>
        <span className="text" onClick={handleLanguage} >Íslenska</span>
        <div className={`checkbox ${lang=='en' && 'active'}`} onClick={handleLanguage}></div>
        <span className="text" onClick={handleLanguage} >English</span>
      </div>
    </div>
  </StyledHeader>)
}
export default Header
const StyledHeader = styled.div`
    .text {
  font-size: 1em;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-top: -30px;
  flex-direction: column;
  z-index: 999;
}

.language-thing {
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-top: -30px;
  z-index: 999;

}

.nav-menu {
  /* font-size: 30px;
  font-weight: 600;
  background-color: #FFF;
  text-align: right; */
}

.nav-menu:hover {
  /* font-size: 30px;
  font-weight: 600;
  background-color: black;
  color: #FFF; */

}

.checkbox {
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 1.25em;
  height: 1.25em;
}

.active {
  background: #00FF38;
}

.language-options {
  display: flex;
  background-color: #FFF;
  font-weight: 600;
  max-height: 20px;
  font-size: 16px;


}

@media (max-width: 909px) {
  .language-options {
    font-size: 20px;
  }

  .header {
    margin-top: -40px;
  }
}
` 