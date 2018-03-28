import React from 'react';
import './header.css';

const Header = () => {
  return(
    <div>
      <div className="pillar"></div>
      <div className="empty">
        <div className="navContainer">
          <div className="navContents">
            <div className="logoOuter">
              <div className="logoContainer">
                <a className="insLogoStyle bgi insLogoBg">Instagram</a>
                <a className="insLogoStyle">Instagram</a>
              </div>
            </div>
            <div className="searchContainer">
              <input type="text" className="searchInput" placeholder="搜索"/>
              <div className="searchIconOuter">
                <div className="searchIconContainer">
                  <span className="bgi searchIcon"/>
                  <span className="searchTextIcon">搜索</span>
                </div>
              </div>
            </div>
            <div className="threeIconsOuter">
              <div className="threeIconsContents">
                <div className="exploreIcon"><a/></div>
                <div className="heartIcon"><a/></div>
                <div className="userIcon"><a/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
