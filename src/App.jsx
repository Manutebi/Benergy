import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import Hero from './components/Hero';
import Introducction from './components/Introducction';
import Services from './components/Services';

const Container = styled.div`
  height: 100vh;
`

function App() {
  return (
    <Container>
      <Hero></Hero>
      <Introducction></Introducction>
      <Services></Services>
    </Container>

  )
}

export default App
