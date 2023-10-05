import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <>
            <Section>
                <NavContainer>
                <Logo src="/public/img/benergy.png" />
                    <Links>
                        <List>
                            <ListItem>Inicio</ListItem>
                            <ListItem>Nosotros</ListItem>
                            <ListItem>Sistema Sticc</ListItem>
                            <ListItem>Contacto</ListItem>
                        </List>
                    </Links>
                </NavContainer>
            </Section>
        </>
    )
}

export default Navbar

const Section = styled.div`
display:flex;
justify-content:center;
`
const NavContainer = styled.nav`
border-radius: 4rem;
width:1400px;
height: 4rem;
padding: 3rem;
display:flex;
align-items:center;
justify-content:space-between;
background-color: lightgrey;
color: white;
margin-top: 1rem;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`;

const Logo = styled.img`
height: 50px;
cursor: pointer;
`;

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width: 768px) {
    display: none;
}
`;

const ListItem = styled.li`
cursor: pointer;
color: #333;
padding: 1rem;
border-radius: 2rem;
transition: all .5s ease;
&:hover{
    background-color:#515151;
    color: #fff;
}
`;
// FF7200 orange




