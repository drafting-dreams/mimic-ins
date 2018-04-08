import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CommentList from './CommentList';
import Media from 'react-media';


class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false,
      collected: false,
      commentClicked: false,
      datetime: "2018-03-29T14:09:04.000Z",
      dateString: "2018年3月29日"
    }

    this.clickLikeHandler = this.clickLikeHandler.bind(this);
    this.clickCollectHandler = this.clickCollectHandler.bind(this);
    this.computeTime = this.computeTime.bind(this);
    this.clickCollectHandler = this.clickCollectHandler.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.like === this.state.like && nextState.collected === this.state.collected) {return false;}
  //   return true;
  // }

  clickLikeHandler() {
    const like = !this.state.like;
    this.setState({like: like});
  }

  clickCommentHandler() {
    this.setState({
      commentClicked: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.like !== this.state.like)
      this.setState({like: nextProps.like});
  }

  clickCollectHandler() {
    const collected = !this.state.collected;
    this.setState({collected: collected});
  }

  componentDidUpdate() {
    if(this.state.commentClicked)
      this.textarea.focus();
  }


  computeTime() {
    const now = new Date(Date.now());
    const time = new Date(this.state.datetime);
    const minus = new Date(now - time);
    const year = minus.getUTCFullYear();
    const month = minus.getUTCMonth();
    const day = minus.getUTCDate();
    if (year === 1970) {
      if (month === 0) {
        if (day <= 8) {
          if (day > 1) {
            return ((day - 1) + "天前");
          } else if (minus.getUTCHours()) {
            return minus.getUTCHours() + "小时前";
          } else if (minus.getUTCMinutes()) {
            return minus.getUTCMinutes() + "分钟前";
          } else if (minus.getUTCSeconds()) {
            return minus.getUTCSeconds() + "秒前";
          }
        }
      }
    }

    if (time.getFullYear() === now.getFullYear()) {
      return this.state.dateString.slice(5);
    }
    else {
      return this.state.dateString.slice();
    }
  }

  render() {
    const like = this.state.like ? " activeLikeBgiPosition" : " likeBgiPosition";
    const likeText = this.state.like ? "取消赞" : "赞";
    const collected = this.state.collected ? " activeCollectBgiPosition" : " collectBgiPosition";
    const collectedText = this.state.collected ? "移除" : "收藏";
    const comments = [{user: "madilynbailey", comm: "想看更多？\n骗你的，没了！"},
      {user: "technical", comm: "My dad told me..."},
      {user: "luka", comm: "he's not your dad"},
      {user: "likalo", comm: "hahaha"}];

    return (
      <div className="commentsContainer">
        <section className="commentLogosContainer">
          <Link to="#" className="likeLink" role="button" onClick={this.clickLikeHandler}>
            <span className={"activeOpacityChange bgi textOverflowHidden" + like}>{likeText}</span>
          </Link>
          <Link to="#" className="commentLink" role="button" onClick={() => {
            this.clickCommentHandler();
            if(this.textarea)
              this.textarea.focus()
          }}>
            <span className="activeOpacityChange bgi commentBgiPosition textOverflowHidden">评论</span>
          </Link>
          <Link to="#" className="collectLink" role="button" onClick={this.clickCollectHandler}>
            <span className={"activeOpacityChange bgi textOverflowHidden" + collected}>{collectedText}</span>
          </Link>
        </section>
        <section className="likeNumber">
          <div className="likeNumberContents">
            <Link to="#" className="activeOpacityChange likeNumberLink"><span>2,918</span> 次赞</Link>
          </div>
        </section>
        <div className="commentContainer">
          <CommentList comments={comments}/>
        </div>
        <div className="TimeContainer">
          <Link to="user" className="activeOpacityChange timeLink">
            <time className="timeFont lineHeightChange"
                  dateTime={this.state.datetime}>{this.computeTime()}
            </time>
          </Link>
        </div>

        <Media query="(min-width: 735px)">
          {matches => matches || this.state.commentClicked ? (
            <section className="commentAreaContainer commentAreaContainerOuter">
              <form className="commentForm">
                <textarea autoComplete="off"
                          autoCorrect="off"
                          className="addComment"
                          placeholder="添加评论..."
                          aria-label="添加评论..."
                          onBlur={() => {
                            this.setState({commentClicked: false});
                          }}
                          ref={(textarea) => {
                            this.textarea = textarea;
                          }}/>
              </form>
            </section>
          ) : ([])}
        </Media>

      </div>
    );
  }

}

Comments.propTypes = {
  like: PropTypes.bool
}

export default Comments;
