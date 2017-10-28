import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import values from 'lodash/values';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.location = ""
    this.navItems = [
      { title: "Brooklyn!", path: "/brooklyn"},
      { title: "SOS!", path: "/sos"},
      { title: "Blog", path: "/posts"},
      { title: "About Us", path: "/about"},
      { title: "Calendar", path: "/calendar"},
      { title: "FAQ", path: "/faq"},
      { title: "Download", path: "/download"},
      { title: "Donate", path: "/donate"},
      { title: "Groups", path: "/groups"},
      { title: "Rentals", path: "/rentals"}
    ]
    this.state = {
      headerOpen: false
    }
    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader() {
    this.setState({ headerOpen: !this.state.headerOpen })
  }

  render() {
    this.location = this.props.match.path
    const navItems = this.navItems.map((item, idx) => {
      let itemClass = 'nav-item'
      if (this.props.location.pathname == item.path) {
        itemClass = 'nav-item nav-selected'
      }
      return <Link to={item.path} key={idx} className={itemClass} onClick={this.toggleHeader}>{item.title}</Link>
    })
    let header

    if (this.state.headerOpen) {
        header = (
        <div id='header-container' className="open">
          <ul id='header-nav' className="open">
            <Link to={"/"}><img id='header-logo' src={window.images.vcb_logo} /></Link>
            {navItems}
          </ul>
          <button id='header-toggle' className='open' onClick={this.toggleHeader}><img src={window.images.menu_toggle} /></button>
        </div>
        )
    } else {
      header = (
        <div id='header-container'>
          <ul id='header-nav' className="closed">
            <Link to={"/"}><img id='header-logo' src={window.images.vcb_logo} /></Link>
            {navItems}
          </ul>
          <button id='header-toggle' className='closed' onClick={this.toggleHeader}><img src={window.images.menu_toggle} /></button>
        </div>
      )
    }

    return (
      header
    )
  }
  // <img src={window.images.header} id='header-banner'/>
}

const mapStateToProps = ({posts}, {match}) => {
};

const mapDispatchToProps = (dispatch) => {

};

export default withRouter(Header)
