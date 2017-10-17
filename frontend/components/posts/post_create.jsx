import React,{ Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
import values from 'lodash/values'
import S3Uploader from '../util/dropzone_s3_uploader'
import { createPost } from '../../actions/post_actions'
import { getMonth } from '../../util/dateUtil'
import ReactS3Uploader from 'react-s3-uploader'
import Header from '../header'

class PostCreate extends React.Component {
  constructor(props) {
    super(props)
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image'],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],

        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],

        [{ 'align': [] }],

        ['clean']
      ]
    }
    this.state = {
      title: "",
      body: "",
      galleryName: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  changeTitle() {
    return (e) => {
      this.setState({title: e.currentTarget.value})
    }
  }

  handleSave() {
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)
  }

  render() {
    const { editorState } = this.state
    return <div id='post-create'>
      <Header />
      <input id='create-title' placeholder="TITLE" value={this.state.title} onChange={this.changeTitle()} />
      <ReactQuill id='editor'
                  value={this.state.body}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={this.modules} />

      <button id='post-save' onClick={() => this.handleSave()}>Save</button>
    </div>
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(PostCreate));
