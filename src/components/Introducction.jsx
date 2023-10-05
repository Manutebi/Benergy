import React from "react";
import styled from "styled-components";
import MySwiperComponent from "./MySwiperComponent";

function Introducction() {
    return (
        <>
            <Section>
                <p></p>
                <Objectives>¿Que hacemos en Benergy?</Objectives>
                {/* <MyTypewriter></MyTypewriter> */}
                <Whatwedo>
                    {/* <Pasforpas src="/public/img/benergy.png" /> */}
                    <MySwiperComponent></MySwiperComponent>
                </Whatwedo>
            </Section>
        </>
    )
}

export default Introducction

const Section = styled.div`
margin-top: 4rem;
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #efefef;
`
const Objectives = styled.h2`
display: flex;
justify-content: center;
align-items: center;
color: black;
font-size: 2.5em;
padding: 4rem 0 4rem;
`
const Whatwedo = styled.div`
display: grid;
place-items: center;
/* grid-template-columns: 1fr 1fr; */
background-color: lightgray;
width: 100%;
height: 100%;
border-radius: 4rem;

`




