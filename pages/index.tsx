import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Warehouse App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/warehouses">Warehouses</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Home;
