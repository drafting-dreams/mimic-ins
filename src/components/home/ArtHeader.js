import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ArtHeader = (props) => {
  return(
    <header className="artHeader">
      <div className="avatarContainer">
        <canvas className="avatarCanvas"
                style={{position: 'absolute', width: '40px', height: '40px', top: '0px', left: '0px',
                  transform: 'translate(-5px, -5px)'}}/>
        <Link className="avatarLink" to="/user" style={{width: "30px", height: "30px"}}>
          <img className="avatarSize" src={props.avatar}/>
        </Link>
      </div>
      <div className="nameContainer">
        <div>
          <div className="name">
            <Link to="/user" className="activeOpacityChange nameLink nameLinkStyle">{props.name}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

ArtHeader .propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default ArtHeader;
