import React,{ Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactQuill from 'react-quill'
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
      body: ""}
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
    return <div>
      <input placeholder="Title" value={this.state.title} onChange={this.changeTitle()} />
      <ReactQuill value={this.state.body}
                  onChange={this.handleChange}
                  theme="snow"
                  modules={this.modules} />

      <button onClick={() => this.handleSave()}>Save</button>
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
