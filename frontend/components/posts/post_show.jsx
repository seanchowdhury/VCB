import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';
import { requestPost } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'

class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.post = this.props.post
  }

  componentWillMount() {
    if (!this.props.post) {
      const postId = parseInt(this.props.match.params.postId)
      this.props.requestPost(postId)
    }
  }

  componentWillReceiveProps(newProps) {
    this.post = newProps.post
  }

  render() {
    let post
    if (this.post) {
      post = (
        <section>
          <div> {this.post.author_name} </div>
          <div> {this.post.title} </div>
          <div> {this.post.body} </div>
        </section>
        )
    }
    return (
      <div> {post} </div>
    )
  }
}

const mapStateToProps = ({posts}, {match}) => {
  const postId = parseInt(match.params.postId);
  const post = posts[postId];
  return {
    post
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostShow));
