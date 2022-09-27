import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { Spinner, Box } from "@chakra-ui/react";

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
    <Box>
      {isLoading ? <Spinner /> : Hero}
      <Navbar />
      <Hero results={results} />
    </Box>
  );
}

export default App;
