export async function getFruits() {
    const response = await fetch(
      "http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json"
    );
    const data = await response.json();
    return data;
  }
  