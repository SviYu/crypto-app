import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
        try {
          const { data } = await axios.get(`${server}/exchanges`);
          setExchanges(data);
          setLoading(false);
          console.log(data)
        } catch (error) {
          setLoading(false);
          setError(true);
        }
    };

    fetchExchanges();
  }, [])

  if (error) return <ErrorComponent message={"Error While Fetching Exchanges"} />

  return (
    <Container maxW={"container.xl"} marginBottom={"8"}>
      {loading ? <Loader /> : (
        <>
          <HStack wrap={"wrap"} justifyContent={"center"}>
           
            {
              exchanges.map((i) => (
                <ExchangeCard
                  name={i.name}
                  image={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                  key={i.id} />
              ))
            }
           
          </HStack>
        </>)}
    </Container>
  )
};

const ExchangeCard = ({ name, image, rank, url }) => (
  <a href={url} target="blank">
    <VStack w={"52"} shadow={"lg"} p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"} m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.05)"
        }
      }}
    >
        <Image src={image} w="10" h="10" objectFit={"contain"} alt={"Exchange"} />
        <Heading size={"md"} noOfLines={1}>{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
)

export default Exchanges