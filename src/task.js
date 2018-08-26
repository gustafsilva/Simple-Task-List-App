import React, { Component } from 'react'
import { ListItem, CheckBox, Body, Text } from 'native-base';

/** Task Component, responsible for displaying the text and status of a task.
 * The status of a task can be changed while is text is unchagning.
 */
export default class Task extends Component {
  constructor(props){
    super(props);

    /* Capturing initial values */
    this.text = props.text; // text is immutable
    this.state = {
      completed: props.completed // can be changed
    }

    this.select = this.select.bind(this);
  }

  /* Change status of a Task */
  select() {
    this.setState({ completed: !this.state.completed });
  }


  render() {
    return (
      <ListItem onPress={ this.select }>
        <CheckBox checked={ this.state.completed } />
        <Body>
          <Text>{ this.text }</Text>
        </Body>
      </ListItem>
    )
  }
}
