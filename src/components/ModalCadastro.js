import React, { useState } from 'react';
import { Modal, Nav, InputGroup, FormControl, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios'
import { history } from '../history'
import '../containers/App.css'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

function ModalCadastro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = values => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios.post('http://127.0.0.1:5000/login', axiosConfig)
    .then(resp => {
        const { data } = resp
        if (data) {
            localStorage.setItem('access_token', data)
            history.push('/home')
            console.log(resp)
        }
    })
    setShow(false);
}

  return (
    <>
      <Nav.Link variant="primary" onClick={() => setShow(true)}>
        Cadastro
      </Nav.Link>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          initialValues={{}}
          >
          <Container>
            <Row>
              <h1>Cadastro de Serviço</h1>
              <h2>Cadastro</h2>
              <InputGroup className="mb-3" />
              <FormControl
                placeholder="Nome"
                aria-label="Nome"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Sobrenome"
                aria-label="Sobrenome"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Data Nascimento"
                aria-label="Data Nascimento"
                aria-describedby="basic-addon2"
              />
            </Row>
            <Row>
              <InputGroup className="mb-3" />
              <FormControl
                placeholder="CPF"
                aria-label="CPF"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="RG"
                aria-label="RG"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Cidade"
                aria-label="Cidade"
                aria-describedby="basic-addon2"
              />
            </Row>
          </Container>

          <Container>
            <Row>
              <h2>Dados Bancários</h2>
              <InputGroup className="mb-3" />
              <FormControl
                placeholder="Banco"
                aria-label="Banco"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Agencia"
                aria-label="Agencia"
                aria-describedby="basic-addon2"
              />
              <FormControl
                placeholder="Conta"
                aria-label="Conta"
                aria-describedby="basic-addon2"
              />
            </Row>
          </Container>

          <Container >
            <Row>
              <h2>Tipo de Serviço</h2>
              <FormControl
                placeholder="Tipo de Serviço"
                aria-label="Tipo de Serviço"
                aria-describedby="basic-addon2"
              />
            </Row>
          </Container>

          {/* TO-DO */}
          <Modal.Footer closeButton>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit} >
            Save Changes
          </Button>
          </Modal.Footer>

        </Modal.Body >
      </Modal >
    </>
  );
}


export default ModalCadastro
