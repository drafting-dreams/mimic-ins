import React from 'react';
//import PropTypes from 'prop-types';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
import Art from './ArtContainer';
import './home.css';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {
        return (

            <main role="main">
              <section className="mainSection">
                <div>
                  <div>
                  <div style={{flexDirection: "column"}}>
                    <Art/>
                  </div>
                  </div>
                </div>
              </section>
            </main>

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
