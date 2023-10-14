import MasonryImageList from '../../components/Gallery.jsx'
import Navbar from '../../components/Navbar'
import '../../index.css'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242769/studiophotocreation/cypriot-weddings/maria-andreas/DJI_0025_vpbcjv.webp',
    alt: "A photo from Maria's and Andreas's wedding",
    title: 'Cypriot Wedding: Maria and Andreas'
  }
]

const ChristinaAndreas = () => {
  return (
    <main>
      <Navbar />
      <MasonryImageList itemData={itemData} />
    </main>
  )
}
export default ChristinaAndreas
