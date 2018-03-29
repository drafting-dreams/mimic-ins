import React from 'react';

//import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputActivated: false,
      inputText: '搜索',
      inputValue: ''
    };
    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
    this.handleClickOnInput = this.handleClickOnInput.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.loseFocus = this.loseFocus.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleClickOnInput() {
    this.focusTextInput();
    this.setState({
      inputActivated: true
    });
  }

  handleChangeOnInput(e) {
    this.setState({
      inputText: e.target.value ? e.target.value : "搜索",
      inputValue: e.target.value
    });
  }

  focusTextInput() {
    this.textInput.focus();
    this.textInput.select();
  }

  loseFocus() {
    this.setState({
      inputActivated: false
    });
    console.log('losefocus')
  }

  clearInput() {
    this.setState({
      inputText: "搜索",
      inputValue: "",
      inputActivated: false
    });
    console.log('clear')
  }

  render() {
    const activated = this.state.inputActivated;
    const text = this.state.inputText;
    const decoration = (!activated) ?
      (<div className="searchIconOuter" onClick={this.handleClickOnInput}>
        <div className="searchIconContainer">
          <span className="bgi searchIcon searchIconUnactivatedPosition"/>
          <span className="searchTextIcon">{text}</span>
        </div>
      </div>) :
      (
        [<span key="searchIcon" className="bgi searchIcon searchIconActivatedPosition"/>,
          <div key="cb" className="clickBoard" onClick={this.loseFocus}/>,
          <div key="searchClear" className = "bgi searchClear" onClick={this.clearInput}/>]
      );

    return (
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          value={this.state.inputValue}
          placeholder="搜索"
          onChange={this.handleChangeOnInput}
          ref={(input) => {
            this.textInput = input;
          }}/>
        {decoration}
      </div>
    );

  }

}

// SearchBar.propTypes = {
//
// };

export default SearchBar;
