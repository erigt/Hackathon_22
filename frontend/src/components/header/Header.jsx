import PropTypes from 'prop-types';
import Logo from '/logo.png'
import Btn from '../Button/Btn';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';

export default function Header({ text1, text2 }) {
  return (
    <header className={styles.headerContainer}>
      <Link to='/'><img src={Logo} alt="" /></Link>
      <div className={styles.btnGroup}>
        <NavLink to="/vip"><Btn color='secondary' text={text2}></Btn></NavLink>
        <NavLink to="/addform"><Btn color='primary' text={text1}></Btn></NavLink>
      </div>
    </header>
  )
}

Header.propTypes = {
  text1: PropTypes.string.isRequired, text2: PropTypes.string.isRequired,
};