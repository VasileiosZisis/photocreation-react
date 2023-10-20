import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_0544_aixvr7.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_0545_q34gev.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568575/studiophotocreation/models/Sveta/SPC_0549_mhja0o.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568575/studiophotocreation/models/Sveta/SPC_0559_pua0df.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568576/studiophotocreation/models/Sveta/SPC_0560_fhfuyv.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568576/studiophotocreation/models/Sveta/SPC_0562_sw3bil.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568577/studiophotocreation/models/Sveta/SPC_0567_xbstfi.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568576/studiophotocreation/models/Sveta/SPC_0568_zplale.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568545/studiophotocreation/models/Sveta/SPC_0576_m0yt9k.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568546/studiophotocreation/models/Sveta/SPC_0579_xhvpvf.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568545/studiophotocreation/models/Sveta/SPC_0583_qhgxxz.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568550/studiophotocreation/models/Sveta/SPC_0608_dscigz.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568547/studiophotocreation/models/Sveta/SPC_0615_hhdc5c.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568547/studiophotocreation/models/Sveta/SPC_0619_kganjf.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568546/studiophotocreation/models/Sveta/SPC_0623_gifgyz.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568547/studiophotocreation/models/Sveta/SPC_0625_juwkyr.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568547/studiophotocreation/models/Sveta/SPC_0628_ciio4j.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568549/studiophotocreation/models/Sveta/SPC_0633_rrbc5v.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568549/studiophotocreation/models/Sveta/SPC_0655_isrlmk.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568553/studiophotocreation/models/Sveta/SPC_0662_p0qqpk.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568552/studiophotocreation/models/Sveta/SPC_0669_ags4yb.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568550/studiophotocreation/models/Sveta/SPC_0671_yvovj1.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568550/studiophotocreation/models/Sveta/SPC_0680_wcplhn.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568553/studiophotocreation/models/Sveta/SPC_0683_isl5ua.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568554/studiophotocreation/models/Sveta/SPC_0685_zix2un.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568552/studiophotocreation/models/Sveta/SPC_0693_td1bzl.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568552/studiophotocreation/models/Sveta/SPC_0703_cwzpsv.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568554/studiophotocreation/models/Sveta/SPC_0707_teuqfg.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568554/studiophotocreation/models/Sveta/SPC_0715_bidjmr.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568554/studiophotocreation/models/Sveta/SPC_0739_p0xfsi.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568559/studiophotocreation/models/Sveta/SPC_0741_f7r5ln.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568559/studiophotocreation/models/Sveta/SPC_0758_vcbhyn.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568557/studiophotocreation/models/Sveta/SPC_0770_kiiotx.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568558/studiophotocreation/models/Sveta/SPC_0786_jtlkb9.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568557/studiophotocreation/models/Sveta/SPC_0792_nq4tvi.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568557/studiophotocreation/models/Sveta/SPC_0803_dqzp4i.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568560/studiophotocreation/models/Sveta/SPC_0806_ocjqkk.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568559/studiophotocreation/models/Sveta/SPC_0811_qhx5rr.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568562/studiophotocreation/models/Sveta/SPC_0814_lakym5.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568560/studiophotocreation/models/Sveta/SPC_0853_qzfgw0.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568562/studiophotocreation/models/Sveta/SPC_0870_idb64p.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568566/studiophotocreation/models/Sveta/SPC_0876_wag9tc.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568562/studiophotocreation/models/Sveta/SPC_0884_syzg0n.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568562/studiophotocreation/models/Sveta/SPC_0890_tty4dy.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568564/studiophotocreation/models/Sveta/SPC_0903_wdj3tr.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568564/studiophotocreation/models/Sveta/SPC_0908_wdgnuv.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568565/studiophotocreation/models/Sveta/SPC_0909_kn7txg.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568567/studiophotocreation/models/Sveta/SPC_0910_xrtdui.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0923_c3iupa.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0924_t2buhn.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568567/studiophotocreation/models/Sveta/SPC_0931_pcqgku.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568568/studiophotocreation/models/Sveta/SPC_0932_inalqa.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0933_adurdq.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0937_gjp4zz.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568569/studiophotocreation/models/Sveta/SPC_0942_orymrq.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568571/studiophotocreation/models/Sveta/SPC_0947_awaa2a.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568570/studiophotocreation/models/Sveta/SPC_0954_s0sida.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568571/studiophotocreation/models/Sveta/SPC_0976_sweeyn.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568571/studiophotocreation/models/Sveta/SPC_0986_kxx15n.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568571/studiophotocreation/models/Sveta/SPC_1019_g03cvu.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568571/studiophotocreation/models/Sveta/SPC_1022_hqsboh.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568572/studiophotocreation/models/Sveta/SPC_1028_t5wp5k.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568572/studiophotocreation/models/Sveta/SPC_1029_kvj6ib.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568572/studiophotocreation/models/Sveta/SPC_1030_ynkzua.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568572/studiophotocreation/models/Sveta/SPC_1037_jisdfm.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568572/studiophotocreation/models/Sveta/SPC_1038_jj9gub.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_1064_qobgda.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568575/studiophotocreation/models/Sveta/SPC_1068_hgmh2e.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_1071_olorim.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568574/studiophotocreation/models/Sveta/SPC_1073_sejk1u.webp',
    alt: "A photo from Sveta's model photoshoot",
    title: 'Model: Sveta'
  }
]

const Sveta = () => {
  return <MasonryImageList itemData={itemData} />
}
export default Sveta
