import './HomePage.css'
import CategoryContainer from '../components/CategoryContainer'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0
  })
  return (
    <>
      <Helmet>
        {/* Schema */}
        <script type='application/ld+json'>
          {`{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Studio Photo Creation by D",
        "url": "https://www.studiophotocreationbyd.com",
        "logo": "https://res.cloudinary.com/dmdbza74n/image/upload/v1632242164/studiophotocreation/logo_white_mkjefy.png",
        "foundingDate": "2005",
        "founder":
        {
            "@type": "Person",
            "name": "Dimitris Domouchtsis"
        },
        "address": 
        {
            "@type": "PostalAddress",
            "streetAddress": "Apostolou Pavlou 14A",
            "addressRegion": "Paphos",
            "postalCode": "8046",
            "addressCountry": "CY"
        },
        "contactPoint": 
        {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "+35799541649",
            "email": "photocreation@cytanet.com.cy"
        },
        "sameAs": 
        [ 
            "https://www.facebook.com/DomouchtsisDimitris",
            "https://www.instagram.com/domouchtsis"
        ]
    }`}
        </script>
        {/* End Schema */}

        <meta
          name='description'
          content='A wedding, christening and portrait photographer located in Paphos, Cyprus. 
        Studio Photo Creation by Dimitris Domouchtsis.'
        />
        <link rel='canonical' href='https://www.studiophotocreationbyd.com/' />
        <title>
          Wedding Photographer in Paphos, Cyprus - Studio Photo Creation by D
        </title>
        <meta
          property='og:title'
          content='Wedding Photographer in Paphos, Cyprus - Studio Photo Creation by D'
        />
        <meta
          property='og:description'
          content='A portrait, christening and wedding photographer located in Paphos, Cyprus. 
    Studio Photo Creation by Dimitris Domouchtsis.'
        />
        <meta
          property='og:url'
          content='https://www.studiophotocreationbyd.com/'
        />
      </Helmet>

      <main>
        <section className='video-section'>
          <div className='video-div'>
            <video autoPlay muted loop className='video'>
              <source
                src='https://res.cloudinary.com/dmdbza74n/video/upload/v1632241719/studiophotocreation/video_l2pj3j.mp4'
                type='video/mp4'
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </section>
        <section ref={ref} className='transition-section'>
          <p className={inView ? 'transition-p-left' : ''}>
            Providing you the&nbsp;
            <br /> <span className='transition-span'>finest footage</span>
            &nbsp;of
          </p>
          <img
            className='transition-image-left'
            src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632242600/studiophotocreation/cypriot-weddings/jennifer-xaris/SPC_0655_lgvyls.webp'
          />
          <p className={inView ? 'transition-p-right' : ''}>
            your&nbsp;
            <span className='transition-span'>
              wedding <br />
              christening
              <br /> anniversary
            </span>
            &nbsp;or
          </p>
          <img
            className='transition-image-mid'
            src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2355_v7jz5e.webp'
          />
          <p className={inView ? 'transition-p-bottom' : ''}>
            any other <span className='transition-span'>celebration</span>{' '}
            <br />
            &nbsp;in photo and video
          </p>
          <img
            className='transition-image-right'
            src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1741_bmmhfi.webp'
          />
        </section>
        <section className='categories-section'>
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1720_opgooy.webp'
            }
            title={'CYPRIOT WEDDINGS'}
            width={65}
            height={'20%'}
            top={'10%'}
            left={'15%'}
            linkto={'/cypriot-weddings'}
          />
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0645_cun0gt.webp'
            }
            title={'ENGLISH WEDDINGS'}
            width={70}
            height={'30%'}
            top={'7%'}
            left={'60%'}
            linkto={'/english-weddings'}
          />
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244388/studiophotocreation/christenings/agapi/SPC_0048_gmdhd9.webp'
            }
            title={'CHRISTENINGS'}
            width={70}
            height={'20%'}
            top={'35%'}
            left={'10%'}
            linkto={'/christenings'}
          />
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567847/studiophotocreation/proposals/Antreas-Athina/SPC_0079_smxc3k.webp'
            }
            title={'PROPOSALS'}
            width={65}
            height={'20%'}
            top={'42%'}
            left={'50%'}
            linkto={'/proposals'}
          />
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569417/studiophotocreation/families/Rianna-Ralf/SPC_0085_qfbwmg.webp'
            }
            title={'FAMILIES'}
            width={70}
            height={'30%'}
            top={'62%'}
            left={'10%'}
            linkto={'/families'}
          />
          <CategoryContainer
            src={
              'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0923_c3iupa.webp'
            }
            title={'MODELS'}
            width={70}
            height={'20%'}
            top={'68%'}
            left={'55%'}
            linkto={'/models'}
          />
        </section>
        <section className='contact-section'>
          <div className='contact-image-container'>
            <img
              className='contact-image'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1636567848/studiophotocreation/proposals/Antreas-Athina/SPC_0084_df2zky.webp'
            />
          </div>
          <div className='contact-div'>
            <h1 className='contact-h1'>
              <i>
                LET'S TALK AND
                <br /> PLAN YOUR WEDDING
              </i>
            </h1>
            <Link to='/contact' className='contact-a'>
              CONTACT NOW
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
export default HomePage
