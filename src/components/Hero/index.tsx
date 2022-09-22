import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IRickandMorty {
  results: {
    image: string;
    gender: string;
    name: string;
    status: string;
    species: string;
  }[];
}

export const Hero = ({ results }: IRickandMorty) => {
  return (
    <Flex
      alignItems={["center"]}
      h={["70%"]}
      p={["2rem"]}
      gap={["1rem"]}
      justifyContent={["center"]}
      flexWrap={"wrap"}
    >
      {results?.map((result) => (
        <Flex
          flexDirection={["column"]}
          alignItems={["center"]}
          justifyContent={["center"]}
          gap={["1rem"]}
          bg={["blue.400"]}
          w={["15rem"]}
          p={["1rem"]}
        >
          <Image src={result.image} />
          <Text color={["white"]} fontWeight={["black"]} textAlign={["center"]}>
            Name: {result.name}
          </Text>
          <Text color={["white"]} fontWeight={["normal"]}>
            Gender: {result.gender}
          </Text>
          <Text color={["white"]} fontWeight={["bold"]}>
            Status: {result.status}
          </Text>
          <Text color={["white"]} fontWeight={["thin"]}>
            Specie: {result.species}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
