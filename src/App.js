import React, { Component } from 'react';
import Header from './layout/Header';
import Task from './components/Task';
import { Container, Grid } from './styles/styles';

export default class App extends Component {
 state = {
  value: '',
  tasks: [],
  id: 0
 };

 handleInput = e => this.setState({ value: e.target.value });

 addTask = e => {
  if (e.which === 13 && this.state.value.length !== 0) {
   let task = {
     id: this.state.id,
     text: this.state.value,
     show: false
    },
    newTasks = this.state.tasks;
   newTasks.push(task);
   this.setState({
    value: '',
    tasks: newTasks,
    id: this.state.id + 1
   });
  }
 };

 deleteTask = taskIdToDelete => {
  let newTasks = this.state.tasks.filter(task => taskIdToDelete !== task.id);
  this.setState({
   tasks: newTasks
  });
 };

 render() {
  return (
   <React.Fragment>
    <Header
     addTask={this.addTask}
     handleInput={this.handleInput}
     inputValue={this.state.value}
    />
    <Container>
     <Grid>
      {this.state.tasks.map((task, index) => (
       <Task
        text={task.text}
        id={index}
        key={task.id}
        show={task.show}
        deleteTask={() => this.deleteTask(task.id)}
       />
      ))}
     </Grid>
    </Container>
   </React.Fragment>
  );
 }
}
