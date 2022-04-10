import Image from "next/image";
import React from "react";
import instagram from "../../icons/instagram.svg";
import whatsapp from "../../icons/whatsapp.svg";
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
          <div className={styles.header__icon}>
            <Image
              src={instagram}
              alt="Instagram"
              width={30}
              height={30}
              layout="intrinsic"
            />
          </div>
          <div className={styles.header__icon}>
            <Image src={whatsapp} alt="Whatsapp" width={30} height={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
