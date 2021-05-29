import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ toggleCartHidden, hidden, itemCount }) => (
  <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        MENTAL WELLNESS
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
            <Link to="/" className="nav-link">
              <div>
                <i className="fa fa-home fa-lg mb-1"></i>
              </div>
              Home
            </Link>
          </li>
          <li className="nav-item text-center mx-2 mx-lg-1">
            <Link to="/" className="nav-link">
              <div>
                <i className="fa fa-envelope fa-lg mb-1"></i>
              </div>
              Blog
            </Link>
          </li>
          <li className="nav-item text-center mx-2 mx-lg-1">
            <Link to="/" className="nav-link">
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
            <Link to="/" className="nav-link">
              <div>
                <i className="fa fa-globe fa-lg mb-1"></i>
              </div>
              Community
            </Link>
          </li>
          <li className="nav-item text-center mx-2 mx-lg-1">
            <Link to="/login" className="nav-link">
              <div>
                <i className="fa fa-user-plus fa-lg mb-1"></i>
              </div>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// <div className={`${classType}`}>
//           <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
//             <input
//               type="search"
//               className="form-control"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-white"
//               type="button"
//               data-mdb-ripple-color="dark"
//             >
//               Search
//             </button>
//           </form>
//         </div>
