import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Item, Text  } from "./style";
import { getFruits } from "../api/api";

function Home() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFruits();
      setFruits(data);
    }

    fetchData();
  }, []);

  return (

<Container>
      <Title>Lista de Frutas</Title>
       <Item>
         {fruits.map((fruit) => (
          <Text>
          <Link id={fruits.name} to={`/details/`}>{fruit.name} </Link>
          </Text>
        ))}
      </Item>
    </Container>
  );
}

export default Home;

