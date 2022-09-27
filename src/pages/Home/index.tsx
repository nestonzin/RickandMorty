import { DefaultLayout } from "../../_layouts/default";
import { Hero } from "../../components/Hero";
import { useQuery } from "@tanstack/react-query";
import { Spinner, Box, Flex } from "@chakra-ui/react";



const api = {
  base: "https://rickandmortyapi.com/api/character",
};

export const Home = () => {
  const { isLoading, error, data } = useQuery(["rmData"], () =>
    fetch(api.base).then((res) => res.json())
  );

  const results = data?.results?.slice(0, 35);

  // console.log(data.results);
  return (
    <DefaultLayout>
      <Hero results={results} />
    </DefaultLayout>
  );
};
