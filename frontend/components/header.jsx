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
  }

  render() {
    this.location = this.props.match.path
    const navItems = this.navItems.map((item, idx) => {
      let itemClass = 'nav-item'
      if (this.props.match.path == item.path) {
        itemClass = 'nav-item nav-selected'
        console.log(item.title)
      }
      return <Link to={item.path} key={idx} className={itemClass}>{item.title}</Link>
    })
    return (
      <div id='header-container'>
        <ul id='header-nav'>
          <Link to='/posts'><img id='header-logo' src={window.images.vcb_logo} /></Link>
          {navItems}
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

export default withRouter(Header)
