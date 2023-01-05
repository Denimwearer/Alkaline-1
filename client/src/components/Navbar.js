import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img className={styles.telephone} src="telephone.png" alt="telephone"></img>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>470 869 7559</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <a href="/">
            <li className={styles.listItem}>Homepage</li>
          </a>
          <li className={styles.listItem}>Menu</li>
          <img className={styles.logo} src="Alkaline-1.jpg" alt="logo"></img>
          <li className={styles.listItem}>About</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <a href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <img className={styles.cart}src="cart.png" alt={styles.cart}></img>
            <div className={styles.counter}></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
