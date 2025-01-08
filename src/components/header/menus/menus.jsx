import styles from './style.module.css';

const Menus = () => {
  return (
    <div className={styles.menus}>
      <a href='#'>Home</a>
      <a href='#'>About us</a>
      <a href='#'>Contact us</a>
      <button>Register Now</button>
    </div>
  );
};

export default Menus;
