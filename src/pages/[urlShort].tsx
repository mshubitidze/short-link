import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { api } from "../utils/api";

const ShortUrlPage = () => {
  const router = useRouter();

  const fetchLongUrl = api.shortUrlRouter.fetchLongUrl.useQuery(
    {
      shortUrl: router.query.urlShort as string,
    },
    {
      enabled: !!router.query.urlShort,
    }
  );

  useEffect(() => {
    if (!fetchLongUrl.data) return;

    window.location.href = fetchLongUrl.data;
  }, [fetchLongUrl.data]);

  return <div></div>;
};

export default ShortUrlPage;
