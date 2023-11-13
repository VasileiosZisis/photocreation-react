import { useState, useEffect } from 'react'
import './Gallery.css'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Lightbox from 'react-awesome-lightbox'
import './style.css'

function MasonryImageList ({ itemData }) {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = showModal ? 'hidden' : 'auto'
  }, [showModal])
  return (
    <section className='image-gallery'>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          overflowY: 'hidden',
          '& .MuiImageListItem-img': {
            borderRadius: '2%',
            cursor: 'pointer',
            transition: '0.4s'
          }
        }}
      >
        <ImageList variant='masonry' cols={3} gap={10}>
          {itemData.map(item => (
            <ImageListItem key={item.url} onClick={handleClick}>
              <img
                onClick={() => setIndex(itemData.indexOf(item))}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.alt}
                loading='lazy'
              />
              <span className='overlay'></span>
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
    </section>
  )
}

export default MasonryImageList
