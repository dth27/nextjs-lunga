import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <div className='footer-item link-container'>
        <a
          className='nav-link'
          href='https://www.lungaschool.is'
          target='_blank'
        >
          LungA School
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-link'
          href='https://www.instagram.com/lunga.festival/'
          target='_blank'
        >
          Instagram
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-link'
          href='https://www.facebook.com/lunga.festival/'
          target='_blank'
        >
          Facebook
        </a>
      </div>
      <div className='footer-item link-container'>
        <a
          className='nav-link'
          href='https://lunga21.tumblr.com'
          target='_blank'
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
  font-size: 26px;
  color: #000000;

  .footer-item {
    text-align: center;
    flex-grow: 1;
    padding: 10px;
  }
`
