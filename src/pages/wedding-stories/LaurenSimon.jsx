import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243768/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_1_a83rs2.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243768/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_2_s9o9ai.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243769/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_3_rt1sql.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243769/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_4_cfcekw.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243770/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_5_s1x6dj.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243769/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_6_ee3cvh.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243772/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_7_utfat6.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243772/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_8_qgfrvz.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243775/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_9_fpjyqh.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243779/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_10_azewyt.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243775/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_11_cm1lbi.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243781/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_12_m36c6i.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243785/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_13_zdhs44.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243775/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_14_cnscaa.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243779/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_15_ccoi5a.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243783/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_16_kuxfbk.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243784/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_17_h2nnyt.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243786/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_18_rk9ftz.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243786/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_19_x6jynk.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243787/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_20_wqbeah.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243787/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_21_yfffov.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243786/studiophotocreation/wedding-stories/lauren-simon/Simon_Lauren_22_xgzgj3.webp',
    alt: "A photo from Lauren's and Simon's wedding",
    title: 'Wedding Story: Lauren and Simon'
  }
]

const LaurenSimon = () => {
  return <MasonryImageList itemData={itemData} />
}
export default LaurenSimon
