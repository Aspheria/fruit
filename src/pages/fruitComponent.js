import {Container, Title, Image, Card, Text, TextContainer} from '../styled/style';

import React, { useState, useEffect } from 'react';

function FruitComponent() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    async function fetchFruits() {
      const response = await fetch('http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json');
      const data = await response.json();
      setFruits(data);
    }

    fetchFruits();
  }, []);

  return (
    <Container>
      {fruits.map((fruit) => (
        <Card key={fruit.id}>
        <Image src={fruit.photo} alt={`Photo of ${fruit.name}`} />
        <Title>{fruit.name}</Title>
        <TextContainer>
        <Text>Calorias: {fruit.calories}</Text>
          <Text>Carboidratos: {fruit.carbohydrates}</Text>
          <Text>Fibras: {fruit.fiber}</Text>
          <Text>Proteínas: {fruit.blubber}</Text>
          <Text>Porção: {fruit.portion}</Text>
        </TextContainer>
         
        </Card>
      ))}


    </Container>

  );
}

export default FruitComponent;
