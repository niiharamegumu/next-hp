import Image from "next/image";
import { VFC } from "react";
import { Layout } from "../components/Layout";

const Contact: VFC = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Page.</p>
        </div>
        <div className="mt-2">
          <Image
            className="rounded-full"
            src="/niihara-min.jpg"
            width={60}
            height={60}
            alt="avatar image"
          />
        </div>
        <div className="mt-2">
          <p>aaaaaa</p>
          <p>aaaaaa</p>
          <p>aaaaaa</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
