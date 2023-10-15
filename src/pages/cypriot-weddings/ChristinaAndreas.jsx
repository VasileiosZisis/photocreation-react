import MasonryImageList from '../../components/Gallery.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242769/studiophotocreation/cypriot-weddings/maria-andreas/DJI_0025_vpbcjv.webp',
    alt: "A photo from Maria's and Andreas's wedding",
    title: 'Cypriot Wedding: Maria and Andreas'
  }
]

const ChristinaAndreas = () => {
  return <MasonryImageList itemData={itemData} />
}
export default ChristinaAndreas
