import React from 'react';
import PropTypes from 'prop-types';
import BigHeart from './BigHeart';

const ArtImage = (props) => {
  const heartAnimationStart = props.doubleClickHandler;
  const className = props.bigHeartClassName;
  return(
    <div>
      <div>
        <div className="artImgOuter">
          <div className="artImgContainer" style={{paddingBottom: "125%"}}>
            <img className="image" decoding="auto" sizes="600px" src="../../static/img/home/madilyn.jpg"/>
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
   bigHeartClassName: PropTypes.string.isRequired
};

export default ArtImage;
