import React from 'react';
import PropTypes from 'prop-types';
import Item from './CommentListItem';
import Blog from './BlogItem';

const CommentList = (props) => {
  let comments = props.comments;
  let blogger = {};
  if (comments.length > 0) {
    blogger = comments[0];
    const multipleLine = blogger.comm.split('\n');
    blogger.comm = multipleLine[0];
    blogger.commMore = multipleLine.slice(1);
  }
  comments = comments.slice(1);
  return (
    <ul className="commentLists">
      <Blog blogger={blogger}/>
      {comments.map(comment => <Item key={comment.user+String(Date.now())} comment={comment}/>)}
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
