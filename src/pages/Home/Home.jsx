// Components:
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import CardBurger from "../../components/CardBurger/CardBurger";
import Footer from "../../components/Footer/Footer";

// Image:
import imgBurger from "../../assets/burger-home.png";

// CSS:
import styles from "./Home.module.css";

const Home = () => {
  const qtyCardBurger = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <section className={styles.maxWidth}>
        <div className={styles.containerHeroBanner}>
          <div className={styles.containerHeroInfosLeft}>
            <h1>O Hamburguer mais delicioso.😋</h1>
            <p>
              A primeira hamburgueria virtual que você faz o pedido online e
              come o burger através do computador.
            </p>
            <Button buttonFill={true} nameButton="Fazer pedido" />
          </div>
          <div className={styles.containerHeroInfosRight}>
            <img src={imgBurger} alt="Imagem de um hambuguer" />
          </div>
        </div>
      </section>
      <Search />
      <section className={styles.containerCardBurgers}>
        {qtyCardBurger.map((item, ind) => (
          <CardBurger key={ind} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Home;
