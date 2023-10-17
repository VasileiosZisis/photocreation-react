import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0012_nvl1vb.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0028_c5ijzx.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567893/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0053_rxok4r.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0136_z6apmf.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0148_rvzs6p.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567895/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0176_kblev6.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0189_j3cq6h.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567904/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0212_gacuok.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567904/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0217_lyotsa.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567905/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0233_wbpfku.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567908/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0235_duufns.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567905/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0239_okircv.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567905/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0260_frjqfc.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567906/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0296_og9for.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567905/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0355_gsnjxg.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567908/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0361_v6uayk.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567907/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0366_odfmmo.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567908/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0372_ytymze.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567908/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0377_tbid4c.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567909/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0393_ahfc7m.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567910/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0395_d7peen.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567910/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0417_pyilmr.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567910/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0418_mymlwz.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567911/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0423_p2qexp.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567910/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0427_ktca5p.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567910/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0460_cd44rn.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567913/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0545_cmkkee.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567912/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0549_rpn2rc.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567912/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0552_lqgmuo.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567912/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0558_nemer6.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0639_qgqy0g.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567892/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0645_cun0gt.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567894/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0666_wl5a9n.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567894/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0669_dhtcfc.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567894/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0672_iqjwor.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0673_yhgs2s.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567895/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0684_wklreb.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567894/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0687_oqxn7n.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0696_b8g6rh.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0702_wxgrgb.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567897/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0720_hsayre.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567896/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0727_lls0k5.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0742_jxtkn2.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0746_fucrol.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0751_kyl6fs.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567903/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0764_hkjjcs.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0821_q79wjf.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0824_mb6pxj.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567898/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0828_ballst.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567900/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0835_uowmnd.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567903/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0838_zxcgio.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567900/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0839_zaahri.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567901/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0842_quwsng.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567900/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0845_ow8hdq.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567903/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0847_gscirx.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567901/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0850_upipiv.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567903/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0862_axdb4t.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567903/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0897_i6yupj.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'English Wedding: Christina-Kyle'
  }
]

const ChristinaKyle = () => {
  return <MasonryImageList itemData={itemData} />
}
export default ChristinaKyle
