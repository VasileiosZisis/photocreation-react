import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243990/studiophotocreation/cypriot-weddings/maria-lampros/SPC_0895_hmruyg.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243991/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1043_v7y8t0.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243995/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1051_nuu0b4.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243993/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1082_irmswf.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243995/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1088_b5y2il.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244000/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1108_qrypef.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243993/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1228_geug6t.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243995/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1307_e6xcax.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244000/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1320_hukmqb.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243999/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1446_agffxd.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244000/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1468_yswppg.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632243996/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1484_zxlugx.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244001/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1486_o7lwmn.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244001/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1497_jdtfor.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244002/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1647_xfulqt.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244002/studiophotocreation/cypriot-weddings/maria-lampros/SPC_1649_ofqjev.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244007/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2219_zauenu.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244007/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2252_mkptv7.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244003/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2275_ie71ku.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244002/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2290_m7rkhb.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244005/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2297_w1xaxq.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244006/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2299_hzlkck.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244006/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2307_yealqv.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244006/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2319_hqsxyq.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2330_zfiobv.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244012/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2335_l48rj3.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244015/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2348_nuisib.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2355_v7jz5e.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244008/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2359_ga41vc.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244011/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2375_tpz11d.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244011/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2384_zhq9iz.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244012/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2387_tzzeuq.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244016/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2391_hoznaq.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244015/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2393_l7xzcn.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244013/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2401_l1vz40.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244014/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2409_wqpici.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244014/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2412_bryqhv.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244014/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2416_p07wb6.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244017/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2427_claaze.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244017/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2429_ialdcd.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244017/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2435_r7bzxd.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244019/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2444_iaaxqk.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244022/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2455_nzrtxh.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244030/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2481_wmhjdz.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244019/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2483_ekxemv.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244019/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2489_sdldk8.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244025/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2503_tf5icn.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244021/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2513_esu5xl.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244025/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2520_wt1zkg.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244021/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2538_jjnizz.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244024/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2543_cfqoyk.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244024/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2552_be99dl.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244024/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2558_lal2w2.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244027/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2560_x39vy4.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244028/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2571_aqajk5.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244027/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2578_saav2v.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244028/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2581_zqo9xz.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244028/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2587_u2tq1h.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244029/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2598_qbbjny.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244032/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2603_vcaulm.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244029/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2615_qezy4x.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244032/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2616_v4i0vf.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244030/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2619_tsj9bt.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244030/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2620_oo0isj.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244030/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2627_lrd7d0.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244031/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2639_wll9wp.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244032/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2642_lxedti.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244032/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2645_yklwx6.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244032/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2646_vvoant.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244034/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2652_ll9jgi.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244034/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2653_x6b7ud.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244034/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2656_askol7.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244033/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2657_bpeepf.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244034/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2663_jfh3wb.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244033/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2664_ey0omf.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632244034/studiophotocreation/cypriot-weddings/maria-lampros/SPC_2674_2_zyu13f.webp',
    alt: "A photo from Maria's and Lampros's wedding",
    title: 'Cypriot Wedding: Maria and Lampros'
  }
]

const MariaLampros = () => {
  return <MasonryImageList itemData={itemData} />
}
export default MariaLampros
