import Typewriter from "typewriter-effect";
import styled from "styled-components";


    const MyTypewriter = () => {
    const words = ["Innovadora", "Tecnológica", "Eficiente", "Banguardista"];

    return (
        <Type>
        <Typewriter
            options={{
            loop: true,
            delay: 50,
            deleteSpeed: 10,
            }}
            onInit={(typewriter) => {
            words.forEach((word, idx) => {
                typewriter.typeString(word).pauseFor(2000).deleteAll();
            });

            typewriter.start();
            }}
        />
        </Type>
    );
    };

export default MyTypewriter;

const Type = styled.h1`
font-size: 4em;
color: lightgray;
background-color: #333;
border-radius: 3rem;
padding: 1rem;
width: 30rem;
`
