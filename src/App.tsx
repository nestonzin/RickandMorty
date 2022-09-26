import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";

const api = {
  base: "https://rickandmortyapi.com/api/character",
};

function App() {
  const { isLoading, error, data } = useQuery(["rmData"], () =>
    fetch(api.base).then((res) => res.json())
  );

  const results = data?.results?.slice(0, 35);

  // console.log(data.results);

  return (
    <div>
      {isLoading === isLoading ? <Spinner /> : results}
      <Navbar />
      <Hero results={results} />
    </div>
  );
}

export default App;
