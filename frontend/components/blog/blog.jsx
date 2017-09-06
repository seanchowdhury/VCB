import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';

class Home extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>"hello"</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
}};

const mapDispatchToProps = (dispatch, { location }) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
