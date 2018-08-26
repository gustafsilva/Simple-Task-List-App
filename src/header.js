import React, { Component } from 'react'
import { Header, Title, Body } from 'native-base';

/* Simple header, with only one title */
export default class SimpleHeader extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>Lista de Tarefas</Title>
        </Body>
      </Header>
    )
  }
}
