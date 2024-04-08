// CSS:
import styles from "./Footer.module.css";

// Image:
import logoFooter from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.footerLogo}>
          <img src={logoFooter} alt="Logo da loja b7 burger" />
        </div>
        <div className={styles.footerCopyright}>
          <p>Powered by B7Web.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
