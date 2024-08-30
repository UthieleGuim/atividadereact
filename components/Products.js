import styled from 'styled-components';

import Card from './Card';

const ProductContainer = styled.div`
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function Products({ products }) {
  return (
    <ProductContainer>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ProductContainer>
  )
};
