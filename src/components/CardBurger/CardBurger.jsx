// CSS:
import styles from "./CardBurger.module.css";

// Image:
import imgBurgerCard from "../../assets/Card-burger-1.png";

// Components:
import Button from "../Button/Button";

const CardBurger = () => {
  return (
    <article className={styles.cardBurger}>
      <div className={styles.imageBurger}>
        <Button nameButton="Promoção" buttonFill={true} />
        <img src={imgBurgerCard} alt="Imagem de um hamburguer" />
      </div>
      <div className={styles.infosBurger}>
        <span>Tradicional</span>
        <strong>Texas Burgers</strong>
        <span className={styles.priceBurger}>R$ 25,50</span>
      </div>
    </article>
  );
};

export default CardBurger;
