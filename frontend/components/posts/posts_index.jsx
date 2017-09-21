import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';
import { requestPosts } from '../../actions/post_actions'

class PostsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.posts = this.props.posts
  }

  componentWillMount() {
    if (Object.keys(this.props.posts).length == 0) {
      this.props.requestPosts()
    }
  }

  componentWillReceiveProps(newProps) {
    this.posts = newProps.posts
  }

  render() {
    let posts
    if (Object.keys(this.posts).length > 0) {
      posts = Object.keys(this.posts).map((key, index) => {
        return <li key={index}>
          {this.posts[key].title} <br />
          {this.posts[key].body}
        </li>
      })
    }
    return (
      <div>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
}};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    requestPosts: () => dispatch(requestPosts()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostsIndex));
