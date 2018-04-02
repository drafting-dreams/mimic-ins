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
          <img className="avatarSize" src="../../static/img/home/madilynAvatar.jpg"/>
        </Link>
      </div>
      <div className="nameContainer">
        <div>
          <div className="name">
            <Link to="/user" className="nameLink nameLinkStyle">madilynbailey</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// ArtHeader .propTypes = {
//   myProp: PropTypes.string.isRequired
// };

export default ArtHeader;
