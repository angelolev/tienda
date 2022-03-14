import { Product } from "./types";
import axios from "axios";
import Papa from "papaparse";

export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTu_mpbWGpr5_-gJZcPfmT6X75hwANUtuXyJhKJXDifqTm9-WOYGyNIv70QN7NH0eUzRXeUc0X1FXpX/pub?output=csv",
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        return new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data as Product[];
              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price),
                }))
              );
            },
            error: (error) => {
              return reject(error.message);
            },
          });
        });
      });
  },
};
