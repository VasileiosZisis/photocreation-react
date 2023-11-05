import './HomePage.css'
import CategoryContainer from '../components/CategoryContainer'

const HomePage = () => {
  return (
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
      <section className='categories-section'>
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1720_opgooy.webp'
          }
          title={'CYPRIOT WEDDINGS'}
          width={65}
          height={80}
          top={'10%'}
          left={'15%'}
        />
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0645_cun0gt.webp'
          }
          title={'ENGLISH WEDDINGS'}
          width={70}
          height={70}
          top={'7%'}
          left={'60%'}
        />
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244388/studiophotocreation/christenings/agapi/SPC_0048_gmdhd9.webp'
          }
          title={'CHRISTENINGS'}
          width={70}
          height={80}
          top={'35%'}
          left={'10%'}
        />
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567847/studiophotocreation/proposals/Antreas-Athina/SPC_0079_smxc3k.webp'
          }
          title={'PROPOSALS'}
          width={65}
          height={80}
          top={'42%'}
          left={'50%'}
        />
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569417/studiophotocreation/families/Rianna-Ralf/SPC_0085_qfbwmg.webp'
          }
          title={'FAMILIES'}
          width={70}
          height={70}
          top={'62%'}
          left={'10%'}
        />
        <CategoryContainer
          src={
            'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0923_c3iupa.webp'
          }
          title={'MODELS'}
          width={70}
          height={80}
          top={'68%'}
          left={'55%'}
        />
      </section>
      <section className='contact-section'>
        <h1 className='contact-h1'>
          <i>
            LET'S TALK AND
            <br /> PLAN YOUR WEDDING
          </i>
        </h1>
        <a href='/' className='contact-a'>
          CONTACT NOW
        </a>
      </section>
    </main>
  )
}
export default HomePage
