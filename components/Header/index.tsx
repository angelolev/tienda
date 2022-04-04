import React from "react";
import styles from "./Header.module.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__image}></div>
      <div className={styles.header__info}>
        <div className={styles.header__brand}>
          <div className={styles.header__logo}></div>
          <div className={styles.header__title}>
            <h1>Tienda - Tu tienda de accesorios</h1>
            <h3>
              Tienda de accesorios hechos por manos peruanas desde el amor
            </h3>
          </div>
        </div>
        <div className={styles.header__social}>
          <div className={styles.header__icon}>Intagram</div>
          <div className={styles.header__icon}>Whatsapp</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
