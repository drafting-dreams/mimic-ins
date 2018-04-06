import React from 'react';
//import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';

class UserPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <div>
            <h1>User Page</h1>
          </div>
        );
    }

}

UserPage.propTypes = {};

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
// export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default UserPage;
