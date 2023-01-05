import styles from "../styles/ItemList.module.css";
import ItemCard from "./ItemCard";

const ItemList = ({ itemList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST ALKALINE CAFÈ IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {itemList.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
