import React from 'react';

const Header = () => {
  return(
    <nav>
      <div className="navContainer">
        <div className="navContents">
          <div className="logos"/>
          <div className="searchBar">
            <input type="text" className="searchInput" placeholder="搜索"/>
            <div className="inactiveSearchStyle">
              <div className="inactiveSearchContents">
                <span className="searchIcon"/>
                <span className="searchTextIcon">搜索</span>
              </div>
            </div>
          </div>
          <div className="threeIcons">
            <div className="threeIconsContents">
              <div className="exploreIcon"><a/></div>
              <div className="heartIcon"><a/></div>
              <div className="userIcon"><a/></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
