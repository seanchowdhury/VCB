import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Editor, EditorState,  } from 'draft-js'
import values from 'lodash/values'
import { createPost } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => { this.setState({ editorState }) }
  }

  render() {
    return (
      <div>
        <input id='create-title' />
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(
  mapDispatchToProps
)(withRouter(PostCreate));
