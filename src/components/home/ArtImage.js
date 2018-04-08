import React from 'react';
import PropTypes from 'prop-types';
import BigHeart from './BigHeart';

const ArtImage = (props) => {
  const heartAnimationStart = props.doubleClickHandler;
  const className = props.bigHeartClassName;
  const ratio = props.aspectRatio*100 + '%';
  return(
    <div>
      <div>
        <div className="artImgOuter">
          <div className="artImgContainer" style={{paddingBottom: ratio}}>
            <img className="image" decoding="auto" sizes="600px" src={props.src}/>
          </div>
          <div className="articleClipBoard" onDoubleClick={heartAnimationStart}/>
        </div>
        <BigHeart className={className}/>
      </div>
    </div>
  );
}

ArtImage .propTypes = {
   doubleClickHandler: PropTypes.func.isRequired,
   bigHeartClassName: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default ArtImage;
