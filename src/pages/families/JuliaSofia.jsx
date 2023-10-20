import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569233/studiophotocreation/families/Julia-Sofia/SPC_0006_udlfo1.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569234/studiophotocreation/families/Julia-Sofia/SPC_0010_dkfqsw.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569231/studiophotocreation/families/Julia-Sofia/SPC_0014_ibwpel.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569231/studiophotocreation/families/Julia-Sofia/SPC_0016_meepum.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569232/studiophotocreation/families/Julia-Sofia/SPC_0018_dc94h7.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569233/studiophotocreation/families/Julia-Sofia/SPC_0023_cbom1r.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569233/studiophotocreation/families/Julia-Sofia/SPC_0026_yrmfv2.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569234/studiophotocreation/families/Julia-Sofia/SPC_0029_hyaxqc.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569234/studiophotocreation/families/Julia-Sofia/SPC_0031_swfrbs.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569234/studiophotocreation/families/Julia-Sofia/SPC_0032_x2r5qh.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569235/studiophotocreation/families/Julia-Sofia/SPC_0038_zr2zeo.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569236/studiophotocreation/families/Julia-Sofia/SPC_0045_qclyqh.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569239/studiophotocreation/families/Julia-Sofia/SPC_0056_ygbrt5.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569236/studiophotocreation/families/Julia-Sofia/SPC_0057_wif3lo.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569236/studiophotocreation/families/Julia-Sofia/SPC_0060_y2wu3m.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569237/studiophotocreation/families/Julia-Sofia/SPC_0065_unsks9.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569237/studiophotocreation/families/Julia-Sofia/SPC_0073_vt9gtf.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569237/studiophotocreation/families/Julia-Sofia/SPC_0089_ee5nyp.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569238/studiophotocreation/families/Julia-Sofia/SPC_0099_mavsrz.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569238/studiophotocreation/families/Julia-Sofia/SPC_0103_f91sle.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569240/studiophotocreation/families/Julia-Sofia/SPC_0106_lzrerq.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569239/studiophotocreation/families/Julia-Sofia/SPC_0109_o1qrup.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569240/studiophotocreation/families/Julia-Sofia/SPC_0110_q3uspj.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569240/studiophotocreation/families/Julia-Sofia/SPC_0115_szmdu0.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569240/studiophotocreation/families/Julia-Sofia/SPC_0124_qr0sth.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569242/studiophotocreation/families/Julia-Sofia/SPC_0127_knqiy9.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569242/studiophotocreation/families/Julia-Sofia/SPC_0139_fiiw4x.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569242/studiophotocreation/families/Julia-Sofia/SPC_0141_htb7nj.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569243/studiophotocreation/families/Julia-Sofia/SPC_0147_hu3np4.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569247/studiophotocreation/families/Julia-Sofia/SPC_0155_ydmchd.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569243/studiophotocreation/families/Julia-Sofia/SPC_0174_tsqtlw.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569243/studiophotocreation/families/Julia-Sofia/SPC_0181_qsfmvt.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569244/studiophotocreation/families/Julia-Sofia/SPC_0184_xzxezg.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569246/studiophotocreation/families/Julia-Sofia/SPC_0195_tu9vtv.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569245/studiophotocreation/families/Julia-Sofia/SPC_0199_epl6wn.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569246/studiophotocreation/families/Julia-Sofia/SPC_0207_gabkpm.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569246/studiophotocreation/families/Julia-Sofia/SPC_0208_vjnlr0.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569247/studiophotocreation/families/Julia-Sofia/SPC_0223_y3hgzb.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569247/studiophotocreation/families/Julia-Sofia/SPC_0227_njrtz2.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569249/studiophotocreation/families/Julia-Sofia/SPC_0242_gakni4.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569249/studiophotocreation/families/Julia-Sofia/SPC_0245_ot6ae9.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569253/studiophotocreation/families/Julia-Sofia/SPC_0259_glf1hl.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569251/studiophotocreation/families/Julia-Sofia/SPC_0268_n21ff5.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569253/studiophotocreation/families/Julia-Sofia/SPC_0278_st3ku4.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569250/studiophotocreation/families/Julia-Sofia/SPC_0295_kviwts.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569251/studiophotocreation/families/Julia-Sofia/SPC_0298_emrwhv.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636569254/studiophotocreation/families/Julia-Sofia/SPC_0342_hqatbs.webp',
    alt: "A photo from Julia's and Sofia's family photoshoot",
    title: 'Family: Julia and Sofia'
  }
]

const JuliaSofia = () => {
  return <MasonryImageList itemData={itemData} />
}
export default JuliaSofia
