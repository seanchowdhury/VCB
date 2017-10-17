import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='header-container'>
        <ul id='header-nav'>
          <Link to='/posts'><img id='header-logo' src={window.images.vcb_logo} /></Link>
          <li className='nav-item'>Brooklyn!</li>
          <li className='nav-item'>SOS!</li>
          <Link to='/posts'><li className='nav-item'>Blog</li></Link>
          <li className='nav-item'>About Us</li>
          <li className='nav-item'>Calendar</li>
          <li className='nav-item'>FAQ</li>
          <li className='nav-item'>Download</li>
          <li className='nav-item'>Donate</li>
          <li className='nav-item'>Groups</li>
          <li className='nav-item'>Rentals</li>
        </ul>
        <img src={window.images.header} id='header-banner'/>
      </div>
    )
  }
}

const mapStateToProps = ({posts}, {match}) => {
};

const mapDispatchToProps = (dispatch) => {

};
