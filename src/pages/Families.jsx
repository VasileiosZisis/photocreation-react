import MasonryImageList from '../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242769/studiophotocreation/cypriot-weddings/maria-andreas/DJI_0025_vpbcjv.webp',
    alt: "A photo from Maria's and Andreas's wedding",
    title: 'Maria and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242665/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1903_dcqo69.webp',
    alt: "A photo from Kata's and Andreas's wedding",
    title: 'Kata and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243187/studiophotocreation/english-weddings/kristen-james/SPC_0516_wxkvdp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242710/studiophotocreation/cypriot-weddings/kristia-alexis/SPC_2238_vehdxq.webp',
    alt: "A photo from Kristia's and Alexis's wedding",
    title: 'Kristia and Alexis'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243868/studiophotocreation/wedding-stories/stacey-aaron/SPC_0339_jsmfdp.webp',
    alt: "A photo from Stacey's and Aaron's wedding",
    title: 'Stacey and Aaron'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1741_bmmhfi.webp',
    alt: "A photo from Kata's and Andreas's wedding",
    title: 'Kata and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2355_v7jz5e.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Maria and wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243600/studiophotocreation/wedding-stories/jemma-carl/CARL_JEMMA_13_j0orvq.webp',
    alt: "A photo from Jemma's and Carl's wedding",
    title: 'Jemma and Carl'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242600/studiophotocreation/cypriot-weddings/jennifer-xaris/SPC_0655_lgvyls.webp',
    alt: "A photo from Jennifer's and Xaris's wedding",
    title: 'Jemma and Carl'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242635/studiophotocreation/cypriot-weddings/kata-andreas/SPC_1720_opgooy.webp',
    alt: "A photo from Kata's and Andreas's wedding",
    title: 'Kata and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242765/studiophotocreation/cypriot-weddings/maria-andreas/SPC_0012_shk4fz.webp',
    alt: "A photo from Maria's and Andreas's wedding",
    title: 'Maria and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242575/studiophotocreation/cypriot-weddings/christina-andreas/SPC_2340_wpnj1k.webp',
    alt: "A photo from Christina's and Andreas's wedding",
    title: 'Christina and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242706/studiophotocreation/cypriot-weddings/kristia-alexis/SPC_2059_uns8pr.webp',
    alt: "A photo from Kristia's and Andreas's wedding",
    title: 'Kristia and Andreas'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243990/studiophotocreation/cypriot-weddings/maria-lampros/SPC_0895_hmruyg.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242600/studiophotocreation/cypriot-weddings/jennifer-xaris/SPC_0713_iq3asg.webp',
    alt: "A photo from Jennifer's and Xaris's wedding",
    title: 'Jennifer and Xaris'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243209/studiophotocreation/english-weddings/kristen-james/SPC_0885_om2lz1.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567905/studiophotocreation/english-weddings/christina-kyle.v2/SPC_0260_frjqfc.webp',
    alt: "A photo from Christina's and Kyle's wedding",
    title: 'Christina and Kyle'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639567994/studiophotocreation/english-weddings/danielle-nikole.v2/SPC_0683_auriw7.webp',
    alt: "A photo from Danielle's and Nikole's wedding",
    title: 'Danielle and Nikole'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639568133/studiophotocreation/english-weddings/denika-david.v2/SPC_0144_l7km61.webp',
    alt: "A photo from Denika's and David's wedding",
    title: 'Denika and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1639568232/studiophotocreation/english-weddings/dianne-terry.v2/SPC_0217_sfkrzx.webp',
    alt: "A photo from Dianne's and Terry's wedding",
    title: 'Dianne and Terry'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1638382630/studiophotocreation/english-weddings/megan-lee/SPC_0500_z1s6mp.webp',
    alt: "A photo from Megan's and Lee's wedding",
    title: 'Megan and Lee'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243457/studiophotocreation/wedding-stories/beth-david/DAVID_BETH_16_fjkuci.webp',
    alt: "A photo from Beth's and David's wedding",
    title: 'Beth and David'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243486/studiophotocreation/wedding-stories/farrah-matthew/MATHEW_FARRAH_9_gxwcsh.webp',
    alt: "A photo from Farrah's and Matthew's wedding",
    title: 'Farrah and Matthew'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243545/studiophotocreation/wedding-stories/jade-craig/JADE_CRAIG_1_pajv1c.webp',
    alt: "A photo from Jade's and Craig's wedding",
    title: 'Jade and Craig'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243625/studiophotocreation/wedding-stories/katrina-scott/scott_katrina_1_sdzgzg.webp',
    alt: "A photo from Katrina's and Scott's wedding",
    title: 'Katrina and Scott'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243669/studiophotocreation/wedding-stories/laura-leigh/LAURA_LEIGH_26_ofvtbq.webp',
    alt: "A photo from Laura's and Leigh's wedding",
    title: 'Laura and Leigh'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244411/studiophotocreation/christenings/agapi/SPC_0774_kwvfaq.webp',
    alt: "A photo from Agapi's christening",
    title: 'Agapi'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632245916/studiophotocreation/001-002a_lbopxb.webp',
    alt: "A photo from Ioanna's christening",
    title: 'Ioanna'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632245917/studiophotocreation/001-002b_jqeehk.webp',
    alt: "A photo from Maria's christening",
    title: 'Maria'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632246022/studiophotocreation/049-050a_aqhqda.webp',
    alt: "A photo from Marilia's christening",
    title: 'Marilia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632245995/studiophotocreation/001-002c_nposfn.webp',
    alt: "A photo from Styliano's christening",
    title: 'Styliano'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632246023/studiophotocreation/001-002d_qzenqj.webp',
    alt: "A photo from Victoria's christening",
    title: 'Victoria'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567848/studiophotocreation/proposals/Antreas-Athina/SPC_0084_df2zky.webp',
    alt: "A photo from Andreas's and Athina's proposal",
    title: 'Andreas and Athina'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568086/studiophotocreation/proposals/Chirag-Priyanka/SPC_0206_bi3mjd.webp',
    alt: "A photo from Chirag's and Priyanka's proposal",
    title: 'Chirag and Priyanka'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568790/studiophotocreation/families/Alexander-Yiana/SPC_0204_xdclrl.webp',
    alt: "A photo from Alexander's and Yiana's family photoshoot",
    title: 'Alexander and Yiana'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568840/studiophotocreation/families/Angelika-Misha/SPC_0264_i152zi.webp',
    alt: "A photo from Angelika's and Misha's family photoshoot",
    title: 'Angelika and Misha'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568988/studiophotocreation/families/Filippos-Emanouela/SPC_0073_tu2w0c.webp',
    alt: "A photo from Filippos's and Emanouela's family photoshoot",
    title: 'Filippos and Emanouela'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569061/studiophotocreation/families/Galina-Lionid/SPC_0352_nh68ge.webp',
    alt: "A photo from Galina's and Lionid's family photoshoot",
    title: 'Galina and Lionid'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569312/studiophotocreation/families/Maria-Natalie/SPC_0155_hpbe6j.webp',
    alt: "A photo from Maria's and Natalie's family photoshoot",
    title: 'Maria and Natalie'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568166/studiophotocreation/models/Anna/SPC_0040_qfmepy.webp',
    alt: "A photo from Anna's model photoshoot",
    title: 'Anna'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568292/studiophotocreation/models/Elena/SPC_0867_uhwvaa.webp',
    alt: "A photo from Elena's model photoshoot",
    title: 'Elena'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568354/studiophotocreation/models/Johanna/SPC_0106-2_uj9ifb.webp',
    alt: "A photo from Johanna's model photoshoot",
    title: 'Johanna'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568481/studiophotocreation/models/Natalie/SPC_0696_hvif3q.webp',
    alt: "A photo from Natalie's model photoshoot",
    title: 'Natalie'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568511/studiophotocreation/models/Olga/SPC_0197_chcfzm.webp',
    alt: "A photo from Olga's model photoshoot",
    title: 'Olga'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0923_c3iupa.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Sveta'
  }
]

const Families = () => {
  return <MasonryImageList itemData={itemData} />
}
export default Families
