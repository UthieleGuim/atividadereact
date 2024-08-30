import styled from 'styled-components';

import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  margin: 16px 0;
`;

const CardDescription = styled.p`
  color: #555;
`;

export default function Card({ product }) {
  return (
    <CardContainer>
      <Image src={product.image} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardContainer>
  )
};
