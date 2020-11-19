import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import ModalCadastro from '../../components/ModalCadastro'

import './Home.css'
  
    const Home = () => {
        
        return (
            <>  
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/orcamentos">Orçamentos</Nav.Link>
                        <ModalCadastro/>

                        <Nav.Link href="/financeiro">Financeiro</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }

export default Home;

