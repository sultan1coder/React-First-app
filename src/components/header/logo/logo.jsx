import styles from './style.module.css';

function Logo(props) {
  return (
    <div className={styles.logo}>
      <h1>{props.applicationName}</h1>
    </div>
  );
}

export default Logo;
