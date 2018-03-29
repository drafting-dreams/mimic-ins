import React from 'react';
import './header.css';
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOnSearchInput = this.handleClickOnSearchInput.bind(this);
  }

  handleClickOnSearchInput (e) {
    ReactDom.unmountComponentAtNode(e.target);

  }

  render() {
    return(
      <div>
        <div className="pillar"></div>
        <div className="empty">
          <div className="navContainer">
            <div className="navContents">
              <div className="logoOuter">
                <div className="logoContainer">
                  <a className="insLogoStyle bgi insLogoBg" href="/">Instagram</a>

                </div>
              </div>
              <SearchBar/>
              <div className="threeIconsOuter">
                <div className="threeIconsContents">
                  <div className="threeIconContainer"><a className="bgi hideLinkText navExplore" href="/explore/">推荐用户</a>
                  </div>
                  <div className="threeIconContainer"><a className="bgi hideLinkText navHeart"
                                                         href="/accounts/activity/">动态</a></div>
                  <div className="threeIconContainer"><a className="bgi hideLinkText navUser" href="/user/">个人主页</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
