import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <section className='main-contact'>
        <div class='title-contact'>
          <h1>Let's talk and plan your wedding</h1>
        </div>
      </section>
      <section class='contact-details'>
        <div class='text-contact'>
          <p>
            I am Dimitris and I’m from Greece, family man with two sons. Since
            mid-2000 I live and create in Cyprus. My relationship with
            photography counts many years. At the age of 16 I discovered the
            beauty of it and what to say … love from the first sight!
            <br />
            <br />
            On the 14th of February 2005 I created “Studio Photo Creation by D”.
            I’m blessed and lucky that my hobby turned out to be the most
            enjoyable job ever, where the creativity and challenge never
            stops!!! So I’m proud to present you my work! Hope you will enjoy it
            as much as I did!!! Thank you
          </p>
        </div>
        <div class='text-contact'>
          <p>Call Me</p>
          <a href='tel:+35799541649'>+357 99 54 1649</a>
        </div>
        <div class='text-contact'>
          <p>Email Me</p>
          <p>photocreation@cytanet.com.cy</p>
        </div>
        <div class='text-contact'>
          <p>Follow Me</p>
          <a
            target='_blank'
            href='https://www.facebook.com/DomouchtsisDimitris'
          >
            facebook: DomouchtsisDimitris
          </a>
          <br />
          <a
            target='_blank'
            href='https://www.instagram.com/studiophotocreation/'
          >
            instagram: studiophotocreation
          </a>
        </div>
        <div class='text-contact'>
          <p>Also supporting Fractal Magnus</p>
          <a target='_blank' href='https://www.facebook.com/fractal.magus'>
            facebook: Fractal Magus
          </a>
          <br />
          <a target='_blank' href='https://www.instagram.com/fractal_magus/'>
            instagram: fractal_magus
          </a>
        </div>
      </section>
      <section class='contact-final'>
        <div class='address'>
          <p class='address-text'>Apostolou Pavlou 14A Paphos CY 8046</p>
          <img
            src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632245788/studiophotocreation/Location_1_ordr1u.webp'
            alt='Front view of the photostudio in paphos'
          />
        </div>
        <div class='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.3281231813625!2d32.41835435340739!3d34.77290767312378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e5ee3aa8a0c429c!2sWedding%20%26%20Portrait%20Photographer%20Dimitris%20Domouchtsis!5e0!3m2!1sen!2s!4v1597683639687!5m2!1sen!2s'
            className='googleMap'
            style={{ border: 0 }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
      </section>
    </div>
  )
}
export default ContactPage
