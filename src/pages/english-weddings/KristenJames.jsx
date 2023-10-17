import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243154/studiophotocreation/english-weddings/kristen-james/SPC_0004_vwhwyl.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0007_upijey.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0010_bbnyh3.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0011_plev9c.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0014_r9w9wm.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0018_ijljtb.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243155/studiophotocreation/english-weddings/kristen-james/SPC_0020_ihqa7g.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243157/studiophotocreation/english-weddings/kristen-james/SPC_0030_sggvnd.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243159/studiophotocreation/english-weddings/kristen-james/SPC_0037_wz57yu.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243162/studiophotocreation/english-weddings/kristen-james/SPC_0043_wa41bj.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243157/studiophotocreation/english-weddings/kristen-james/SPC_0146_g7uaih.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243157/studiophotocreation/english-weddings/kristen-james/SPC_0149_r8gkqa.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243160/studiophotocreation/english-weddings/kristen-james/SPC_0153_rigueq.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243160/studiophotocreation/english-weddings/kristen-james/SPC_0172_bueh7e.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243161/studiophotocreation/english-weddings/kristen-james/SPC_0174_xeca91.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243160/studiophotocreation/english-weddings/kristen-james/SPC_0176_odktgt.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243161/studiophotocreation/english-weddings/kristen-james/SPC_0177_hznewn.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243164/studiophotocreation/english-weddings/kristen-james/SPC_0186_wmaw97.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243165/studiophotocreation/english-weddings/kristen-james/SPC_0192_d5qhw7.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243163/studiophotocreation/english-weddings/kristen-james/SPC_0218_lqjjee.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243164/studiophotocreation/english-weddings/kristen-james/SPC_0224_janw95.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243164/studiophotocreation/english-weddings/kristen-james/SPC_0233_bwemlo.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243173/studiophotocreation/english-weddings/kristen-james/SPC_0241_edl87e.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243169/studiophotocreation/english-weddings/kristen-james/SPC_0244_ilhabp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243178/studiophotocreation/english-weddings/kristen-james/SPC_0246_h6aoss.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243171/studiophotocreation/english-weddings/kristen-james/SPC_0248_tpjf0r.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243175/studiophotocreation/english-weddings/kristen-james/SPC_0253_kjmvvk.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243172/studiophotocreation/english-weddings/kristen-james/SPC_0254_ul8iqf.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243173/studiophotocreation/english-weddings/kristen-james/SPC_0257_gaavzy.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243173/studiophotocreation/english-weddings/kristen-james/SPC_0260_rkovps.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243176/studiophotocreation/english-weddings/kristen-james/SPC_0261_ne8wah.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243177/studiophotocreation/english-weddings/kristen-james/SPC_0266_bmwk69.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243176/studiophotocreation/english-weddings/kristen-james/SPC_0286_ngiyvv.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243176/studiophotocreation/english-weddings/kristen-james/SPC_0295_qihnzu.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243178/studiophotocreation/english-weddings/kristen-james/SPC_0297_mk7ool.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243182/studiophotocreation/english-weddings/kristen-james/SPC_0300_xrjrac.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243180/studiophotocreation/english-weddings/kristen-james/SPC_0314_dv79ov.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243178/studiophotocreation/english-weddings/kristen-james/SPC_0318_zlvsza.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243180/studiophotocreation/english-weddings/kristen-james/SPC_0326_nuzao6.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243183/studiophotocreation/english-weddings/kristen-james/SPC_0349_luvn0p.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243192/studiophotocreation/english-weddings/kristen-james/SPC_0496_smtt2g.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243183/studiophotocreation/english-weddings/kristen-james/SPC_0498_l4uo0o.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243185/studiophotocreation/english-weddings/kristen-james/SPC_0509_yajvpo.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243186/studiophotocreation/english-weddings/kristen-james/SPC_0510_z1xk8o.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243188/studiophotocreation/english-weddings/kristen-james/SPC_0514_t3bwg1.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243187/studiophotocreation/english-weddings/kristen-james/SPC_0516_wxkvdp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243187/studiophotocreation/english-weddings/kristen-james/SPC_0518_kco3fk.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243188/studiophotocreation/english-weddings/kristen-james/SPC_0522_a8dtpp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243190/studiophotocreation/english-weddings/kristen-james/SPC_0530_xjim18.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243192/studiophotocreation/english-weddings/kristen-james/SPC_0535_oiwdao.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243192/studiophotocreation/english-weddings/kristen-james/SPC_0550_rtxy5a.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243191/studiophotocreation/english-weddings/kristen-james/SPC_0552_x5pysc.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243195/studiophotocreation/english-weddings/kristen-james/SPC_0555_np4uau.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243197/studiophotocreation/english-weddings/kristen-james/SPC_0562_jkvzda.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243199/studiophotocreation/english-weddings/kristen-james/SPC_0566_qrmvtn.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243199/studiophotocreation/english-weddings/kristen-james/SPC_0567_axjxyg.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243198/studiophotocreation/english-weddings/kristen-james/SPC_0569_flni2o.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243195/studiophotocreation/english-weddings/kristen-james/SPC_0577_cc0drl.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243200/studiophotocreation/english-weddings/kristen-james/SPC_0582_hk3q97.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243199/studiophotocreation/english-weddings/kristen-james/SPC_0596_zirp5p.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243200/studiophotocreation/english-weddings/kristen-james/SPC_0609_zxlewi.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243204/studiophotocreation/english-weddings/kristen-james/SPC_0616_milm9f.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243203/studiophotocreation/english-weddings/kristen-james/SPC_0621_zafzgp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243204/studiophotocreation/english-weddings/kristen-james/SPC_0622_p1elsb.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243203/studiophotocreation/english-weddings/kristen-james/SPC_0627_sircrv.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243202/studiophotocreation/english-weddings/kristen-james/SPC_0628_dunjdp.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243204/studiophotocreation/english-weddings/kristen-james/SPC_0662_ukp2z0.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243205/studiophotocreation/english-weddings/kristen-james/SPC_0666_wxap6q.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243204/studiophotocreation/english-weddings/kristen-james/SPC_0703_joogfw.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243206/studiophotocreation/english-weddings/kristen-james/SPC_0709_iuqe3v.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243206/studiophotocreation/english-weddings/kristen-james/SPC_0714_puprkz.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243208/studiophotocreation/english-weddings/kristen-james/SPC_0871_gh1wav.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243208/studiophotocreation/english-weddings/kristen-james/SPC_0875_fc62ok.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243210/studiophotocreation/english-weddings/kristen-james/SPC_0878_kdfrl5.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243209/studiophotocreation/english-weddings/kristen-james/SPC_0885_om2lz1.webp',
    alt: "A photo from Kristen's and James's wedding",
    title: 'English Wedding: Kristen and James'
  }
]

const KristenJames = () => {
  return <MasonryImageList itemData={itemData} />
}
export default KristenJames
