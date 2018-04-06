import React from 'react';
import PropTypes from 'prop-types';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      more: false,
      blogger: props.blogger
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({more: true});
  }

  render() {
    const blogger = this.state.blogger;
    return (
      <li className="commentItem">
        <Link to='/user' className="commentItemName linkColor">{blogger.user}</Link>
        {this.state.more ?
          (
            <span>
              <span>
                {blogger.comm}
                {blogger.commMore.map(comm => [<br />,comm])}
              </span>
            </span>
          ):
          (
            <span>
            <span>{blogger.comm}</span>
              {blogger.commMore.length > 0 ? (
                  <Link to="#"
                        className="activeOpacityChange"
                        style={{color: "#666"}}
                        onClick={this.showMore}>&nbsp; 更多</Link>) :
                ([])}
            </span>
          )
        }

      </li>
    );
  }

}

BlogItem.propTypes = {
  blogger: PropTypes.object
};

// function mapStateToProps(state, ownProps) {
//   return {
//     state: state
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BlogItem);

export default BlogItem;
