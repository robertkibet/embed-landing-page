import type {AppProps} from "next/app";
import {Global, css} from "@emotion/react";
import Layout from "../layout";
import Head from "next/head";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import persistedReducers from "../reducers";

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  persistedReducers(),
  composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

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
      <Provider store={store}>
        {/* TODO: maybe make loading be more good looking :) */}
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
