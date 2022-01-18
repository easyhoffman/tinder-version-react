import React, {useState} from 'react'
import styled from "styled-components"
import logo from './logo.svg';
import './App.css';
import ResetBar from './ResetBar/ResetBar';
import CardComplete from './Components/CardComplete/CardComplete';

function App() {
  return (
    <>
      <CardComplete/>
      <ResetBar />
      
    </>
  );
}

export default App;
