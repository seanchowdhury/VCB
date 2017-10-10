import React,{ Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import Delta from 'quill-delta';
import values from 'lodash/values'
import { createPost } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image'],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
      ]
    }
    this.state = { ops: new Delta()}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(content, delta, source, editor) {
    const newDelta = editor.getContents()
    this.setState({ ops: newDelta })
  }

  render() {
    console.log(this.state.ops)
    const { editorState } = this.state
    return <div>
      A sample text editor
      <ReactQuill value={this.state.ops}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={this.modules} />
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
