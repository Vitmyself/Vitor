import React from 'react';
import { Navbar, Nav, Container, Row, Button, Col } from 'react-bootstrap';

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
                    <ModalCadastro />
                    <ModalMovimentacao />
                </Nav>
            </Navbar>
            <Container className="Containers">
                <h1>Image</h1>
                <Row>
                    <Col className="Container-Receber">
                        <h3>Valor a receber na data de hoje</h3>
                        <h3>R$ 1100,00</h3>
                    </Col>
                    <Col className="Container-Pagar">
                        <h3>Valor a pagar na data de hoje</h3>
                        <h3>R$ -1300,00</h3>
                    </Col>
                </Row>
                <Row>
                    <h1>Footer</h1>
                </Row>
            </Container>
        </>
    )
}

export default Home;

