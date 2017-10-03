import React,{ Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import values from 'lodash/values'
import { createPost } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => { this.setState({ editorState }) }
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    })
  }

  render() {
    const { editorState } = this.state
    return <div>
      A sample text editor
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    </div>
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
