import styles from "./Button.module.css";

const Button = ({ buttonFill, nameButton }) => {
  return (
    <>
      <button className={buttonFill ? styles.btn_fill : styles.btn_outline} id="hide">
        {nameButton}
      </button>
    </>
  );
};

export default Button;
