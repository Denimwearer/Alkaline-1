import styles from "../styles/ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <a href={`/item/${item._id}`}>
        <img src={item.img} alt="" width="500" height="500"></img>
      </a>
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>${item.prices[0]}</span>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
};

export default ItemCard;
