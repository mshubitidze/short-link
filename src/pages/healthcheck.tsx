import React from "react";
import { api } from "../utils/api";

const Healthcheck = () => {
  const fetchLongUrl = api.shortUrlRouter.fetchLongUrl.useQuery(
    {
      shortUrl: "misho",
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-500 via-sky-500">
      <p>სანდრო, ყლეზე მაკოცე</p>
      {fetchLongUrl?.data ? <div>OK</div> : <div>Loading...</div>}
    </div>
  );
};

export default Healthcheck;
