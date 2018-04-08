import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Art from './ArtContainer';
import * as artActions from '../../actions/artActions';
import './home.css';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
      const arts = this.props.arts;
        return (
            <main role="main">
              <section className="mainSection">
                <div>
                  <div>
                  <div style={{flexDirection: "column"}}>
                    {arts.map(art => {return<Art key={art.id} art={art}/>})}
                  </div>
                  </div>
                </div>
              </section>
            </main>

        );
    }

}

HomePage.propTypes = {
  arts: PropTypes.array
};

function mapStateToProps(state) {
    return {
        arts: state.arts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(artActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
