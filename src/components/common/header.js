import React from 'react';
import './header.css';
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const shrinkHeader = 100;
    let scroll = window.pageYOffset;
    if(scroll>shrinkHeader) {
      this.state = {shrink: true};
    } else {
      this.state = {
        shrink: false
      };
    }
    this.handleClickOnSearchInput = this.handleClickOnSearchInput.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    const shrinkHeader = 100;
    let scroll = window.pageYOffset;
    if(scroll>shrinkHeader) {
      this.setState({
        shrink: true
      });
    } else {
      this.setState({
        shrink: false
      });
    }
  }

  handleClickOnSearchInput (e) {
    ReactDom.unmountComponentAtNode(e.target);
  }

  render() {
    const shrink = this.state.shrink;
    const navContainerShrunk = shrink ? "navContainer navContainerShrunk" : "navContainer";
    const navContentsShrunk = shrink ? "navContents navContentsShrunk" : "navContents";
    return(
      <div>
        <div className="pillar"></div>
        <div className="empty">
          <div className={navContainerShrunk}>
            <div className={navContentsShrunk}>
              <div className="logoOuter">
                <div className="logoContainer">
                  <a className="insLogoStyle bgi insLogoBg changeIndent" href="/">Instagram</a>
                  <a className="insLogoStyle bgi smallLogoBtn changeIndent" href="/">Instagram</a>
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
