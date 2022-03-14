import { GetStaticProps } from "next";
import React, { useMemo, useState } from "react";
import api from "../product/api";
import Link from "next/link";

import { Product } from "../product/types";

interface Props {
  products: Product[];
}

const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
};

const Component: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);

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
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{parseCurrency(product.price)}</p>
            <button onClick={() => setCart((cart) => cart.concat(product))}>
              Agregar
            </button>
          </div>
        ))}
      </div>
      <div>
        {cart.length && (
          <Link
            href={`https://wa.me/51952719641?text=${encodeURIComponent(text)}`}
          >
            <button>Ver carrito ({cart.length})</button>
          </Link>
        )}
      </div>
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
