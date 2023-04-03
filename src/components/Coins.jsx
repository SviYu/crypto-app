import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import CoinCard from './CoinCard';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("uah");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol = currency === 'uah' ? '₴' : currency === 'eur' ? '€' : '$';

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

const btns = new Array(111).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
        try {
          const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
          setCoins(data);
          setLoading(false);
          console.log(data)
        } catch (error) {
          setLoading(false);
          setError(true);
        }
    };

    fetchCoins();
  }, [currency, page])

if (error) return <ErrorComponent message={"Error While Fetching Coins. Server Doesn't Answer."} />

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"} display={"flex"} justifyContent={"center"}>
            <HStack spacing={"4"}>
              <Radio value={'uah'}>UAH</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              coins.map((i) => (
                <CoinCard
                  id={i.id}
                  key={i.id} 
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}

                />
              ))
            }
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {
              btns.map((item, index) => (
                <Button bgColor={"blackAlpha.900"} color={"white"}
                  onClick={() => changePage(index + 1)} key={index}>
                  {index + 1}
                </Button>

              ))
            }
          </HStack>
        </>)}
    </Container>
  )
}




export default Coins