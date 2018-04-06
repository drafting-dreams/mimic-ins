import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CommentListItem = (props) => {
  return(
    <li className="commentItem">
      <Link to='/user' className="commentItemName linkColor">{props.comment.user}</Link>
      <span>
        <span>{props.comment.comm}</span>
      </span>
    </li>
  );
}

CommentListItem.propTypes = {
  comment: PropTypes.object
};

export default CommentListItem;
