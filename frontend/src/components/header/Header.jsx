import PropTypes from 'prop-types';
import Logo from '/logo.png'
import Btn from '../Button/Btn';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';

export default function Header({ text }) {
  return (
    <header className={styles.headerContainer}>
      <Link to='/'><img src={Logo} alt="" /></Link>
      <div className={styles.btnGroup}>
        <NavLink to="/addform"><Btn color='primary' text={text}></Btn></NavLink>
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};