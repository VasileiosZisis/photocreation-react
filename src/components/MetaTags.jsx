import React from 'react'
import { Helmet } from 'react-helmet-async'

const MetaTags = ({ metatitle, metadescription, metaurl }) => {
  return (
    <Helmet>
      <title>{metatitle}</title>
      <meta name='description' content={metadescription} />
      <link rel='canonical' href='metaurl' />
      <meta property='og:title' content={metatitle} />
      <meta property='og:description' content={metadescription} />
      <meta property='og:url' content={metaurl} />
    </Helmet>
  )
}

export default MetaTags
