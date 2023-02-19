import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Item, Text  } from "./style";

function Home() {
  const [fruits, setFruits] = useState([]);

useEffect(() => {
  async function fetchFruits() {
    const response = await fetch(
      "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json"
    );
    const data = await response.json();
    setFruits(data);
  }

  fetchFruits();
}, []);

  return (
     <Container>
      <Title>Lista de Frutas</Title>
      <Item>
        {fruits.map((fruit) => (
          <Text>
          <Link to={`/details/`}>{fruit.name} </Link>
          </Text>
        ))}
      </Item>
    </Container>
  );
  }

export default Home;
