import React from "react";
import { Product } from "../../product/types";
import { parseCurrency } from "../../utils";
import styles from "./ProductCard.module.scss";

interface ProductCard {
  id: string;
  title: string;
  price: number;
  image: string;
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCard> = ({
  id,
  title,
  image,
  price,
  product,
  onProductClick,
}) => {
  return (
    <div className={styles.product} key={id}>
      <div className="product__image-container">
        <img className={styles.product__image} src={image} alt={title} />
      </div>
      <div className={styles.product__information}>
        <p className={styles.product__name}>{title}</p>
        <p className={styles.product__price}>{parseCurrency(price)}</p>
      </div>
      <button className="btn" onClick={() => onProductClick(product)}>
        Agregar
      </button>
    </div>
  );
};

export default ProductCard;
