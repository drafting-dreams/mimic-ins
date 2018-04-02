import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from './ArtHeader';
import Image from './ArtImage';

class ArtContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      animation: false
    }
    this.enableAnimation = this.enableAnimation.bind(this);
    this.disableAnimation = this.disableAnimation.bind(this);
  }

  disableAnimation() {
    this.setState({animation: false});
  }

  enableAnimation() {
    this.setState({animation: true});
    setTimeout(this.disableAnimation, 1000);
    console.log(this.state.animation)
  }

  render() {
    const className = this.state.animation ? "bgi doubleClickHeart heartAnimation" : "bgi doubleClickHeart";
    return (
      <article className="homeArticle">
        <Header/>
        <Image doubleClickHandler={this.enableAnimation} bigHeartClassName={className}/>
        <div></div>
        <div></div>
      </article>
    );
  }

}

ArtContainer.propTypes = {};

// function mapStateToProps(state, ownProps) {
//     return {
//         state: state
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(artContainer);

export default ArtContainer;
