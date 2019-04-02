import React from "react";
import useFetch from "fetch-suspense";

const catApi = "https://api.thecatapi.com/v1/images/search";

export const CatPic = () => {
  const catPicResponse = useFetch(catApi, { method: "GET" });

  return catPicResponse ? <img src={catPicResponse[0].url} /> : <div />;
};
