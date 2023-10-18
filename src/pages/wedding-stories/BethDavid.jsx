import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243448/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_1_os75qk.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243451/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_2_la7ppg.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243447/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_3_iuqbd8.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243452/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_4_pcenk4.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243444/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_5_gn1vbv.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243446/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_6_sxrrzj.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243446/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_7_ign8kn.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243450/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_8_y7tvhl.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243448/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_9_prd2pn.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243456/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_10_tto81d.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243450/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_11_ev7msv.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243456/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_12_bfxyzp.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243455/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_13_kkdilk.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243456/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_14_qpb0he.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243457/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_15_wletcg.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243457/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_16_fjkuci.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243458/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_17_wxf3xh.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243459/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_18_pb4jpt.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243460/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_19_kl0wh6.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243459/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_20_sjzule.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243460/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_21_fregoe.webp',
    alt: "A photo from Beth's and David's wedding",
    tile: 'Wedding Story: Beth and David'
  }
]

const BethDavid = () => {
  return <MasonryImageList itemData={itemData} />
}
export default BethDavid
