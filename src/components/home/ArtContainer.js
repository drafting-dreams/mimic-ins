import React from 'react';
import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';

import Header from './ArtHeader';
import Image from './ArtImage';
import Comments from './Comments';

class ArtContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      animation: false,
      like: false
    }
    this.enableAnimation = this.enableAnimation.bind(this);
    this.disableAnimation = this.disableAnimation.bind(this);
  }


  disableAnimation() {
    this.setState({animation: false});
  }

  enableAnimation(e) {
    e.preventDefault();
    this.setState({animation: true, like: true});
    setTimeout(this.disableAnimation, 1000);
  }

  render() {
    const className = this.state.animation ? "bgi doubleClickHeart heartAnimation" : "bgi doubleClickHeart";
    return (
      <article className="homeArticle">
        <Header avatar={this.props.art.userAvatar} name={this.props.art.userName}/>
        <Image doubleClickHandler={this.enableAnimation}
               bigHeartClassName={className}
               aspectRatio={this.props.art.aspectRatio}
               src={this.props.art.src}/>
        <Comments like={this.state.like} comments={this.props.art.comments}/>
        <div className="optionContainer mediaOption">
          <button className="optionButton">
            <span className="bgi optionPosition textOverflowHidden">更多选项</span>
          </button>
        </div>
      </article>
    );
  }

}

ArtContainer.propTypes = {
  art: PropTypes.object.isRequired
};

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
