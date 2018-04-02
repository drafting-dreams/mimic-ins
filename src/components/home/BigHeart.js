import React from 'react';
import PropTypes from 'prop-types';

const BigHeart = (props) => {
  const className = props.className;
  console.log(className);
  //"bgi doubleClickHeart heartAnimation"
  return (
    <div className="doubleClickHeartContainer">
      <span className={className}/>
    </div>
  );

}

BigHeart.prototype = {
  className: PropTypes.string.isRequired
}


export default BigHeart;
