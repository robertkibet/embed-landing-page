import type {AppProps} from "next/app";
import {Global, css} from "@emotion/react";
import Layout from "../layout";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Embed.xyz</title>
        <meta name="description" content="Embed App" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        />
      </Head>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;700&display=swap");

          body {
            min-height: 100vh;
            margin: 0 auto;
          }
          html * {
            font-family: "Readex Pro", sans-serif;
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
