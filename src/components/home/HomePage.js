import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <div>
            <h1>HomePage</h1>
          </div>
        );
    }

}

HomePage.propTypes = {};

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
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;
