import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1 className="text-black text-9xl">Hello NextJS</h1>
    </Layout>
  );
};

export default Home;
