import styles from './style.module.css';

const Menus = () => {
  return (
    <div className={styles.menus}>
      <a href='#'>Our Products</a>
      <a href='#'>Features</a>
      <a href='#'>Help</a>
      <a href='#'>About Us</a>
      <a href='#'>Our team</a>
      <a href='#'>Contact Us</a>
      <a href='#'>Terms & Conditions</a>
      <button>Download</button>
    </div>
  );
};

export default Menus;
