import styled from 'styled-components';

import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const products = [
    {
      id: 1,
      title: 'Produto 1',
      description: 'Descrição do Produto 1',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      title: 'Produto 2',
      description: 'Descrição do Produto 2',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      title: 'Produto 3',
      description: 'Descrição do Produto 3',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      title: 'Produto 4',
      description: 'Descrição do Produto 4',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      title: 'Produto 5',
      description: 'Descrição do Produto 5',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 6,
      title: 'Produto 6',
      description: 'Descrição do Produto 6',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 7,
      title: 'Produto 7',
      description: 'Descrição do Produto 7',
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 8,
      title: 'Produto 8',
      description: 'Descrição do Produto 8',
      image: 'https://via.placeholder.com/200',
    }
  ];

  return (
    <Container>
      <Title>Tela de Produtos</Title>
      <Description>Confira nossos produtos abaixo</Description>
      <Products products={products} />
    </Container>
  );
}

export default App;
