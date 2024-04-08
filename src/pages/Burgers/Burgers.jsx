// Components:
import Search from "../../components/Search/Search";
import CardBurger from "../../components/CardBurger/CardBurger";
import Footer from "../../components/Footer/Footer";

// CSS:
import styles from "./Burgers.module.css";

const Burgers = () => {
  const qtyCardBurger = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Search />
      <div className={styles.containerCardBurgers}>
        {qtyCardBurger.map((item, ind) => (
          <CardBurger key={ind} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Burgers;
