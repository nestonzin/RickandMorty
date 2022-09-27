import { Hero } from "../../components/Hero";
import { DefaultLayout } from "../../_layouts/default";
import { useQuery } from "@tanstack/react-query";

const api = {
  base: "https://rickandmortyapi.com/api/character",
};

export const Alive = () => {
  const { isLoading, error, data } = useQuery(["rmData"], () =>
    fetch(api.base).then((res) => res.json())
  );

  const results = data?.results?.slice(0, 126);

  let alive = results?.filter((item) => {
    // console.log(status);
    return item.status == "Alive";
  });

  console.log(alive);

  return (
    <DefaultLayout>
      <Hero results={alive} />
    </DefaultLayout>
  );
};
