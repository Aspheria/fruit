import styled from 'styled-components';

export const Container = styled.div`
background-color: black;
position: relative;
margin: 20px auto;

@media (min-width: 560px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

  }

`;

export const Card = styled.div `
background-color: grey;
height: 260px;
width: 180px;
border-radius: 8px;
padding-top: 26px;
margin: 25px auto

`;

export const Title = styled.h1`
text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  padding: 13px 14px 6px;
  margin: 0 auto;
font-weight: 700

// @media (max-width: 375px) {
//     color: black
//   }
`;


export const Image = styled.img`
display: block;
width: 120px;
height: 120px;
border-radius: 50%;
border: 4px solid rgb(108, 35, 192);
margin: 0 auto
`;

export const Text = styled.p`
font-size: 0.6em;
margin: 0 auto;
color: white;
font-weight: 600
`

export const TextContainer = styled.div `
max-width: 85%;
margin: 0 auto;

`
