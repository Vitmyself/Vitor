import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import ModalCadastro from '../../components/ModalCadastro'
import ModalMovimentacao from '../../components/ModaMovimentacao'

import './Home.css'
  
    const Home = () => {
        
        return (
            <>  
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/orcamentos">Orçamentos</Nav.Link>
                        <ModalCadastro/>
                        <ModalMovimentacao />
                    </Nav>
                </Navbar>
            </>
        )
    }

export default Home;

