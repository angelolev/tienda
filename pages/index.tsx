import { GetStaticProps } from "next";
import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import api from "../product/api";
import Link from "next/link";
import ProductCard from "../components/Product";
import { Product } from "../product/types";

interface Props {
  products: Product[];
}

const Component: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleProductClick = (product) => {
    setCart((cart) => cart.concat(product));
  };

  const text = useMemo(() => {
    return cart
      .reduce(
        (message, product) =>
          message.concat(`* ${product.title} - S/ ${product.price}\n`),
        ``
      )

      .concat(
        `\nTotal: S/ ${cart.reduce(
          (total, product) => total + product.price,
          0
        )}`
      );
  }, [cart]);

  return (
    <>
      <Header />
      <section className="products">
        {products.map((product: Product) => (
          <ProductCard
            {...product}
            product={product}
            key={product.id}
            onProductClick={handleProductClick}
          />
        ))}
      </section>
      {cart.length > 0 && (
        <div className="cart-button">
          <Link
            href={`https://wa.me/51952719643?text=${encodeURIComponent(text)}`}
          >
            <button className="btn">Ver carrito ({cart.length})</button>
          </Link>
        </div>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    props: {
      products,
    },
  };
};

export default Component;
