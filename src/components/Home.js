import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Home = (props) => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Seja bem vindo!</h1>
        <p className="lead">Esta é uma simples implementação de uma lista de tarefas com React, Redux, React Router v4 e Reactstrap 4.x</p>
        <hr className="my-2" />
        <p>Para maiores informações consulte o nosso repositório por meio do link no canto superior direito.</p>
        <p className="lead">
          <Button color="primary">Saber Mais</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Home;