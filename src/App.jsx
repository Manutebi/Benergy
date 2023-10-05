import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import Hero from './components/Hero';
import Introducction from './components/Introducction';

const Container = styled.div`
  height: 100vh;
`

function App() {
  return (
    <Container>
      <Hero></Hero>
      <Introducction></Introducction>
    </Container>

  )
}

export default App
