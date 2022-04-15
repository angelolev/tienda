// pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Modal from "../components/Modal";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="myportal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
