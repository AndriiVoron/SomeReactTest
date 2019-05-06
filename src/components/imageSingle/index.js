import React from 'react';
import './style.css';

function ImagePreview(props) {
  return (
    <figure className='imageFigure'>
      <img src={props.image.url} alt={ props.image.title } />
      <figcaption>
        { props.image.title }
      </figcaption>
    </figure>
  );
}

export default ImagePreview;