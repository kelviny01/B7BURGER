// RRD:
import { Link, NavLink } from "react-router-dom";

// Components:
import Button from "../Button/Button";

// Image:
import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/iconMenu.svg";

// CSS:
import styles from "./Header.module.css";

const Header = () => {
  const handleOpenMenu = (e) => {
    e.target.parentNode.classList.toggle("open");
  };

  return (
    <header className={styles.maxWidth}>
      <div className={styles.container}>
        <div className={styles.navigationAndLogo}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Logo da loja b7 burger" />
            </Link>
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink to="/">Início</NavLink>
              </li>
              <li>
                <NavLink to="/burgers">Burgers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contato</NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.containerIconMenu} onClick={handleOpenMenu}>
            <img src={iconMenu} className={styles.hide} alt="" />
          </div>
        </div>
        <Button nameButton="Fazer pedido" />
      </div>
    </header>
  );
};

export default Header;
