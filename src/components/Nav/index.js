import React from 'react';
import { Link } from 'react-router';

// styles
import styles from './styles.scss';

const Nav = ({ children }) => (
  <div className="nav">
    <Link to="view" activeClassName="active">
      View
    </Link>
    <Link to="admin" activeClassName="active">
      Admin
    </Link>
  </div>
);

export default Nav;
