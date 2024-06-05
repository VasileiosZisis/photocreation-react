import { Link } from 'react-router-dom'
import './CategoryContainer.css'

const CategoryContainer = ({
  width,
  height,
  top = 0,
  left = 0,
  title,
  src,
  linkto
}) => {
  const aStyle = {
    position: 'absolute',
    top: top,
    left: left,
    width: `calc(100vw - ${width}%)`,
    height: height
  }
  const h3Size = {
    position: 'absolute',
    top: top,
    left: left
  }
  return (
    <>
      <div className='desktop'>
        <h3 style={h3Size} className='categories-h3'>
          {title}
        </h3>
        <Link to={linkto} style={aStyle} className='categories-a'>
          <div className='categories-div'>
            <p className='categories-p'>VIEW ALL</p>
            <img
              className='categories-img'
              src={src}
              alt=''
              role='presentation'
            />
          </div>
        </Link>
      </div>
      <div className='mobile'>
        <h3 className='categories-h3'>{title}</h3>
        <Link to={linkto} className='categories-a'>
          <div className='categories-div'>
            <p className='categories-p'>VIEW ALL</p>
            <img
              className='categories-img'
              src={src}
              alt=''
              role='presentation'
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default CategoryContainer
