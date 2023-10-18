import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243690/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_1_xracqb.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243692/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_2_iqns5z.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243692/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_3_zrg3qg.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243691/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_4_o4vt2j.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243693/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_5_kbndzq.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243692/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_6_cqnxbd.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243696/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_7_wsnsdd.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243694/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_8_ubu6om.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243697/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_9_cv7rhe.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243696/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_10_wo8do9.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243695/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_11_vh3wuz.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243697/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_12_lmwtjs.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243697/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_13_hfxvih.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243699/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_14_xm8j2j.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243704/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_15_zrxqgv.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243709/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_16_gufx8d.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243700/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_17_ufe1ta.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243707/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_18_osbwyj.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243714/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_19_qafuvh.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243707/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_20_vk2kv6.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243706/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_21_lqlvpz.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243711/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_22_ibkn0e.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243711/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_23_r5d0gi.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243709/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_24_p5l9pj.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243711/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_25_qd7ehq.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243714/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_26_qmm01p.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243716/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_27_vdtat9.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243716/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_28_npesry.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243715/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_29_dvzdyi.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243723/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_30_dzmsmz.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243718/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_31_d4s6d7.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243724/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_32_fgktwr.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243722/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_33_pmvt1r.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243719/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_34_hayfpa.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243722/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_35_elwbp8.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243724/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_36_u8frgf.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243726/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_37_qgucxj.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243726/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_38_u9bd0r.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243726/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_39_nzr62x.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243728/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_40_sbxtf3.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243727/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_41_yehzax.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243729/studiophotocreation/wedding-stories/laura-robert/LAURA_ROBERT_42_zp5xib.webp',
    alt: "A photo from Laura's and Robert's wedding",
    title: 'Wedding Story: Laura and Robest'
  }
]

const LauraRobert = () => {
  return <MasonryImageList itemData={itemData} />
}
export default LauraRobert
