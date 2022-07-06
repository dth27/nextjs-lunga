import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <div className='footer-item link-container'>
        <a
          className='nav-footer'
          href='https://www.lungaschool.is'
          target='_blank rel="noreferrer"'
        >
          LungA School
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-footer '
          href='https://www.instagram.com/lunga.festival/'
          target='_blank rel="noreferrer"'
        >
          Instagram
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-footer'
          href='https://www.facebook.com/lunga.festival/'
          target='_blank rel="noreferrer"'
        >
          Facebook
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-footer'
          href='https://lunga21.tumblr.com'
          target='_blank rel="noreferrer"'
        >
          Tumblr
        </a>
      </div>
    </StyledFooter>
  )
}
export default Footer
const StyledFooter = styled.div`

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  font-weight: 600;
  background-color: #fff;
  color: #000000;

  .footer-item {
    flex-grow: 1;
    text-align: center;
  }
  
`
