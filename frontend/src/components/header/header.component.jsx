import React,{useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ history, toggleCartHidden, hidden, itemCount }) => {
  const cookies = new Cookies();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    setIsUserLoggedIn(!!cookies.get('user'));
  },[]);

  const logout = (event) => {
    event.preventDefault();
    fetch("https://mental-wellness.herokuapp.com/logout", {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: "include"
    });
    //Use this for localhost
    // fetch("http://localhost:3000/logout", {
    //         method: "GET",
    //         headers: {'Content-Type': 'application/json'},
    //         credentials: "include"
    // });
    cookies.remove('user');
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Project|Sakura
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/blog/Anxiety" className="nav-link">
                <div>
                  <i className="fa fa-envelope fa-lg mb-1"></i>
                </div>
                Blog
              </Link>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/faq" className="nav-link">
                <div>
                   <i class="fa fa-question-circle fa-lg mb-1"></i>
                </div>
                FAQs
              </Link>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/consult" className="nav-link">
                <div>
                  <i className="fa fa-stethoscope fa-lg mb-1 mt-1"></i>
                </div>
                Consultation
              </Link>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/shop" className="nav-link">
                <div>
                  <i className="fa fa-shopping-bag fa-lg mb-1"></i>
                </div>
                Store
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <div className="nav-link" onClick={toggleCartHidden}>
                <div className="shopping-icon">
                  <i className="fa fa-shopping-cart fa-lg mb-1"></i>
                  <span className="item-number">{itemCount}</span>
                </div>
                Cart
                {hidden ? null : <CartDropdown />}
              </div>
            </li>
            <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/community" className="nav-link">
                <div>
                  <i className="fa fa-globe fa-lg mb-1"></i>
                </div>
                Community
              </Link>
            </li>
            {
              isUserLoggedIn ?
              <li className="nav-item text-center mx-2 mx-lg-1" onClick={(e) => logout(e)}>
                <Link to="/" className="nav-link">
                  <div >
                    <i class="fa fa-sign-out fa-lg mb-1"></i>
                  </div>
                  Logout
                </Link>
            </li>
            :
              <li className="nav-item text-center mx-2 mx-lg-1">
              <Link to="/login" className="nav-link">
                <div>
                  <i className="fa fa-user-plus fa-lg mb-1"></i>
                </div>
                Login
              </Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
  }

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
