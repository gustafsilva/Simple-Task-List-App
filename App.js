import React, { Component } from 'react'
import { Keyboard, ScrollView } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import SimpleHeader from './src/header';
import Task from './src/task';

/** Component App, responsible for rendering the single screen.
 * You will be responsible for showing the to-do lists such as adding new tasks.
 * Component Task helps in rendering the task list.
 */
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      taskTextInput: ""
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    if (this.state.taskTextInput !== "") {
      /* If a task whith empty text has not been passed */
      Keyboard.dismiss();

      let newState = this.state;
      let newTask = {
        completed: false,
        text: this.state.taskTextInput // captures the passed text
      }

      newState.tasks.push(newTask);
      newState.taskTextInput = ""; // reset input

      this.setState(newState);
    }
  }

  /* Funcion responsible for rendering task list */
  _renderTaskList() {
    let tasksView = this.state.tasks.map((task, key) => {
      return (<Task text={task.text} completed={task.completed} key={key} />)
    });

    return tasksView;
  }

  render() {
    return (
      <Container>
        <SimpleHeader />

        <Content>
          <Form>
            <Item regular>
              <Input
                placeholder="Nova Tarefa"
                onChangeText={(taskTextInput) => this.setState({ taskTextInput: taskTextInput })}
                value={this.state.taskTextInput}
              />
            </Item>
            <Button onPress={this.addTask} success full>
              <Text>Adicionar</Text>
            </Button>
          </Form>

          <ScrollView>
            {
              this._renderTaskList()
            }
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
