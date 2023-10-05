import styled from "styled-components";
import Navbar from "./Navbar";
import MyTypewriter from "./MyTypewriter";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
    `;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    `;

const Left = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
    `;

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    `;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    `;

const Line = styled.img`
    height: 5px;
    `;

const Subtitle = styled.h2`
    color: #55db3a;
    `;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
    `;

const Button = styled.button`
    background-color: #30c413;
    color: white;
    font-weight: bold;
    font-size: 1em;
    width: 10rem;
    height: 4rem;
    padding: 10px;
    border: none;
    border-radius: 4rem;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: lightgray;
        color: black;
    }
    `;

const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
    `;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 1s infinite ease alternate;



    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @keyframes animate {
        to {
        transform: translateY(20px);
        }
    }
    `;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Section>

                </Section>
                <Left>
                    <Title>Somos una empresa</Title>
                    <MyTypewriter></MyTypewriter>
                    <WhatWeDo>
                        {/* <Line src="./img/line.png" /> */}
                        <Subtitle>Conoce mas de nuestra soluciones</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, nesciunt!
                        sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsum!.
                    </Desc>
                    <Button>Conocer mas</Button>
                    {/* <Button></Button> */}
                </Left>
                <Right>
                    <Img src="/public/img/cerrar-concepto-idea.jpg" />
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;
