import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img className={styles.image} src="drink.jpeg" alt="drink" objectFit="cover" layout="fill"></img>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            1st Alkaline Cafe
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR RESTAURANT</h1>
          <p className={styles.text}>2821 N 24th St.
            <br /> Phoenix, AZ 85008
            <br /> (470)-869-7559
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
