import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';
import { requestPosts } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'
import Header from '../header'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.lastPost
    this.posts = this.props.posts
    this.isLastPostInView = this.isLastPostInView.bind(this)
  }

  componentWillMount() {
    if (Object.keys(this.props.posts).length < 6) {
      this.props.requestPosts(null, 0)
    }
  }

  componentWillReceiveProps(newProps) {
    window.addEventListener('scroll', this.isLastPostInView);
    if (Object.keys(newProps.posts).length == Object.keys(this.posts).length) {
      window.removeEventListener('scroll', this.isLastPostInView)
    }
    this.posts = newProps.posts
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.isLastPostInView);
  }

  isLastPostInView() {
    const rect = this.lastPost.getBoundingClientRect()
    if (rect.top >= 0 && rect.bottom <= $(window).height()) {
      window.removeEventListener('scroll', this.isLastPostInView)
      this.props.requestPosts(this.lastPost.id, Object.keys(this.posts).length)
    }
  }

  render() {
    let posts
    const objectKeys = Object.keys(this.posts)
    if (objectKeys.length > 0) {
      posts = objectKeys.map((key, index) => {
        const post = this.posts[key]
        const createdAt = new Date(post.created_at)
        const postDate = `${getMonth(createdAt.getMonth())} ${createdAt.getDate()}, ${createdAt.getFullYear()}`
        if (objectKeys.length == index + 1) {
          return <li className='index-container' key={index} id={post.id} ref={(post) => this.lastPost = post}>
            <div className='index-title'>{post.title}</div>
            <div className='index-details'>{post.author_name} • {postDate}</div>
            <div className='index-body' dangerouslySetInnerHTML={{ __html: post.body }} />
          </li>
        } else {
          return <li className='index-container' key={index}>
            <div className='index-title'>{post.title}</div>
            <div className='index-details'>{post.author_name} • {postDate}</div>
            <div className='index-body' dangerouslySetInnerHTML={{ __html: post.body }} />
          </li>
        }
      })
    }

    return (
      <div id='page-container'>
        <Header />
        <div id='index-container'>{posts}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
}};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPosts: (postId, offset) => dispatch(requestPosts(postId, offset))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostsIndex));
