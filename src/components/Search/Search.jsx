// Icons:
import { FaSearch, FaAngleDown } from "react-icons/fa";

// CSS:
import styles from "./Search.module.css";

// Components:
import Input from "../Input/Input";

const Search = () => {
  return (
    <section className={styles.search}>
      <h3>Pesquise o seu Hamburguer favorito!</h3>
      <form className={styles.searchContent}>
        <label>
          <FaSearch />
          <Input namePlaceholder="Digite o nome do Burguer" />
        </label>
        <label>
          <FaAngleDown />
          <select name="burger">
            <option value="">Selecionar categoria</option>
            <option value="xtudo">X-Tudo</option>
            <option value="xfrango">X-Frango</option>
            <option value="xcalabresa">X-Calabresa</option>
            <option value="xsalada">X-Salada</option>
          </select>
        </label>
      </form>
    </section>
  );
};

export default Search;
