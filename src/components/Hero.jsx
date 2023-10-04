import { useState, useEffect } from 'react'
import './Hero.css'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Lightbox from 'react-awesome-lightbox'
import './style.css'

const itemData = [
  {
    img: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242576/studiophotocreation/cypriot-weddings/christina-andreas/SPC_2343_dwu3ab.webp',
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1632242576/studiophotocreation/cypriot-weddings/christina-andreas/SPC_2343_dwu3ab.webp',
    title: 'Bed'
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    url: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books'
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink'
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen'
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    url: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds'
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    url: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    url: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors'
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    url: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage'
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    url: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table'
  }
]

function MasonryImageList () {
  const [showModal, setShowModal] = useState(false)
  const [index, setIndex] = useState(0)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = showModal ? 'hidden' : 'auto'
  }, [showModal])
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          overflowY: 'hidden',
          '& .MuiImageListItem-img': {
            borderRadius: '2%'
          }
        }}
      >
        <ImageList variant='masonry' cols={3} gap={10}>
          {itemData.map(item => (
            <ImageListItem key={item.img} onClick={handleClick}>
              <img
                onClick={() => setIndex(itemData.indexOf(item))}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {showModal && (
        <Lightbox
          images={itemData}
          onClose={handleClick}
          startIndex={index}
          allowRotate={false}
          doubleClickZoom={0}
        />
      )}
    </>
  )
}

const Hero = () => {
  return (
    <section className='image-gallery'>
      <MasonryImageList />
    </section>
  )
}

export default Hero
