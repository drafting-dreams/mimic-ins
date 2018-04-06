import React from 'react';
import './header.css';
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom';

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

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.shrink === this.state.shrink) {return false;}
    return true;
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
      <nav>
        <div className="pillar"></div>
        <div className="empty">
          <div className={navContainerShrunk}>
            <div className={navContentsShrunk}>
              <div className="logoOuter">
                <div className="logoContainer">
                  <NavLink exact to="/" className="textOverflowHidden insLogoStyle bgi insLogoBg changeIndent">Instagram</NavLink>
                  <NavLink exact to="/" className="textOverflowHidden insLogoStyle bgi smallLogoBtn changeIndent">Instagram</NavLink>
                </div>
              </div>
              <SearchBar/>
              <div className="threeIconsOuter">
                <div className="threeIconsContents">
                  <div className="threeIconContainer"><NavLink className="bgi hideLinkText navExplore" to="/explore/">推荐用户</NavLink>
                  </div>
                  <div className="threeIconContainer"><a className="bgi hideLinkText navHeart"
                                                         href="/accounts/activity/">动态</a></div>
                  <div className="threeIconContainer"><NavLink className="bgi hideLinkText navUser" to="/user/">个人主页</NavLink></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
