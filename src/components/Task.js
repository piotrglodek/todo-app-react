import React, { Component } from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 46px auto 46px;
  grid-column-gap: 12px;
  align-items: center;
 `,
 Circle = styled.div`
  transition: all ease-out 0.2s;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid ${({ show }) => (show ? '#303f9f' : '#212121')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: ${({ show }) => (show ? '#303f9f' : '#212121')};
 `,
 Text = styled.h2`
  font-weight: 300;
  color: ${({ show }) => (show ? '#303f9f' : '#212121')};
  margin: 0;
  text-transform: capitalize;
  overflow-x: auto;
 `,
 Close = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  width: 46px;
  height: 46px;
  cursor: pointer;
  outline: none;
  transition: all ease-out 0.2s;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ::after,
  ::before {
   content: '';
   display: block;
   width: 16px;
   height: 2px;
   background-color: #fe6464;
   position: absolute;
   top: 50%;
   left: 50%;
  }
  ::after {
   transform: translate(-50%, -50%) rotate(45deg);
  }
  ::before {
   transform: translate(-50%, -50%) rotate(-45deg);
  }
 `;

export default class Task extends Component {
 state = {
  show: this.props.show
 };

 toggleShow = () => this.setState({ show: !this.state.show });

 render() {
  const { text, id, deleteTask } = this.props;
  return (
   <GridItem onClick={this.toggleShow}>
    <Circle show={this.state.show}>{id}</Circle>
    <Text show={this.state.show}>{text}</Text>
    <Close show={this.state.show} onClick={deleteTask} />
   </GridItem>
  );
 }
}
