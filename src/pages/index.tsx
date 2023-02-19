import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

  const CreateLinkForm = dynamic(() => import("../components/create-link"), {
    ssr: false,
  });

const Home: NextPage = () => {
  return (
      <Suspense>
        <CreateLinkForm />
      </Suspense>
  );
};

export default Home;
