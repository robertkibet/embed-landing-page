import type {NextPage} from "next";
import Head from "next/head";
import Homepage from "../screens/homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Embed.xyz</title>
        <meta name="description" content="Embed App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </>
  );
};

export default Home;
