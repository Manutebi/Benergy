import styled from "styled-components";
import React from "react";


const Services = () => {
    return (
        <Section>
            <Title>Damos mas que servicios</Title>
            <Cards>
                <Card0>
                    <h6>sajkdjkads</h6>
                </Card0>
                <Card1>
                    <h6>sajkdjkads</h6>

                </Card1>
                <Card2>
                    <h6>sajkdjkads</h6>

                </Card2>
                <Card3>
                    <h6>sajkdjkads</h6>

                </Card3>
                <Card4>
                    <h6>sajkdjkads</h6>

                </Card4>
                <Card5>
                    <h6>sajkdjkads</h6>

                </Card5>
            </Cards>
        </Section>
    );
};

export default Services;


const Section = styled.div`
margin-top: 4rem;
height: 100vh;

`
const Title = styled.h1`
color: #333;
font-size: 3em;
display: flex;
justify-content: center;
`

const Cards = styled.div`
color: #333;
display: grid;
place-items: center;
font-size: 3em;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px


`

const Card0 = styled.div`
background-color: lightgrey;
width: 25rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
const Card1 = styled.div`
background-color: lightgrey;
width: 30rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
const Card2 = styled.div`
background-color: lightgrey;
width: 30rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
const Card3 = styled.div`
background-color: lightgrey;
width: 30rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
const Card4 = styled.div`
background-color: lightgrey;
width: 30rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
const Card5 = styled.div`
background-color: lightgrey;
width: 30rem;
justify-content: center;
height: 20rem;
border-radius: 2rem;

`
