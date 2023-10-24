import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <p>
        Copyright © 2023 Photography Dimitris Domouchtsis/Studio Photo Creation
      </p>
      <p>
        This website uses&nbsp;
        <a
          href='https://policies.google.com/technologies/partner-sites'
          target='_blank'
        >
          Google Analytics
        </a>
      </p>
      <p className='sign'>
        Created by&nbsp;
        <a href='https://www.vasiliszisis.me/' target='_blank'>
          Vasilis Zisis
        </a>
      </p>
    </section>
  )
}

export default Footer
