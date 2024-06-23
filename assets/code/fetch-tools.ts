import axios from "axios";

export const fetchJson = async (url: string) => {
  const response = await axios.get(url);
  return response.status !== 200 ? {} : response.data;
};

export const fetchGraphQl = async (
  url: string,
  query: string,
  variables: object,
) => {
  const response = await axios.post(
    url,
    {
      query: query,
      variables: variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.status !== 200 ? {} : response.data;
};
