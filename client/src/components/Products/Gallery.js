import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/800/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/800/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/800/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  return (
    <ImageGallery items={images} />
  )
}

export default Gallery;