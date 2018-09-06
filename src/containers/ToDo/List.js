import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container } from 'reactstrap';
export default class ToDoList extends React.Component {
  render() {
    return (
      <Container>
        <Card>
          <CardHeader>Lita de tarefas</CardHeader>
            <CardBody>
              <CardTitle>Lita de Tarefas</CardTitle>
              <CardText>Você não possui nehuma tarefa!</CardText>
            </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Container>
    );
  }
}