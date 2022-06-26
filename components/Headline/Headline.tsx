import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
interface HeadlineProps {
  title: string
  subtitle?: string
}
export const Headline = ({ title, subtitle }: HeadlineProps) => {
  const { t: al, i18n } = useTranslation('aboutlunga')
  const lang = i18n.language
  return (
    <StyledHeadline className='link-container'>
      <Link className='nav-link' href='/'>
        {lang == 'is' ? (
          <div className='headline icelandic'>
            <div className='subtitle'> {subtitle} </div> {title}
          </div>
        ) : (
          <div className='headline english'>
            {title} <div className='subtitle'>{subtitle}</div>
          </div>
        )}
      </Link>
    </StyledHeadline>
  )
}
export default Headline

const StyledHeadline = styled.div`
    
  .subtitle {
    font-size: 40px;
  }
  
`
