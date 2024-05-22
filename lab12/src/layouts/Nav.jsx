import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import log1 from '../pictures/logo.svg';
import mea1 from '../pictures/measering.svg';
import calc1 from '../pictures/calculation.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container1}>
        <img src={log1} alt="Logo" className={styles.logo} />
      </div>
      <ul className={`${styles.navList} ${styles.form}`}>
      <li><Link to="/Services" className={`${styles.navList} ${styles.list}`}>Услуги</Link></li>
        <li><Link to="/Products" className={`${styles.navList} ${styles.list}`}>Продукты</Link></li>
        <li><Link to="/AboutUs" className={`${styles.navList} ${styles.list}`}>О нас</Link></li>
        <li><Link to="/Portfolio" className={`${styles.navList} ${styles.list}`}>Портфолио</Link></li>
        <li><Link to="/FAQ" className={`${styles.navList} ${styles.list}`}>FAQ</Link></li>
        <li><Link to="/Contacts" className={`${styles.navList} ${styles.list}`}>Контакты</Link></li>
      </ul>
      <div className={styles.container2}>
        <Link to="/make-request" className={`${styles.btn} ${styles.style1}`}><img src={mea1} alt="Make Request" className={styles.icon1} /> Создать запрос</Link>
        <Link to="/calculation" className={`${styles.btn} ${styles.style2}`}><img src={calc1} alt="Calculation" className={styles.icon2} /> Расчитать</Link>
      </div>
    </nav>
  );
};

export default Nav;